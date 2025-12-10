'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Particle, hexToRgb, Color } from '@/lib/particlePhysics';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useResponsiveViewport } from '@/hooks/useResponsiveViewport';
import { useParticleAnimation } from '@/hooks/useParticleAnimation';

interface LineConfig {
  text: string;
  gradient: { from: string; to: string };
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
}

interface ParticleTextEffectProps {
  lines: LineConfig[];
  onComplete?: () => void;
  config?: {
    particleDensity?: number;
    particleSize?: number;
    particleGlow?: boolean;
  };
  className?: string;
}

const DEFAULT_PARTICLE_CONFIG = {
  particleDensity: 3,
  particleSize: 2,
  particleGlow: true,
};

export default function ParticleTextEffect({
  lines,
  onComplete,
  config = {},
  className = '',
}: ParticleTextEffectProps) {
  const mergedConfig = { ...DEFAULT_PARTICLE_CONFIG, ...config };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  const prefersReducedMotion = useReducedMotion();
  const viewport = useResponsiveViewport();

  // Get particle density based on viewport
  const getParticleDensity = () => {
    switch (viewport) {
      case 'mobile':
        return 0; // Skip on mobile
      case 'tablet':
        return 2;
      default:
        return mergedConfig.particleDensity;
    }
  };

  const {
    state: animationState,
    start: startAnimation,
    getTotalDuration,
  } = useParticleAnimation(
    {
      startDelay: 500,
      flyInDuration: 2000,
      formingDuration: 500,
      holdingDuration: 500,
      dissolvingDuration: 500,
      fadeInDuration: 500,
    },
    onComplete
  );

  // Skip animation if reduced motion preferred
  useEffect(() => {
    if (prefersReducedMotion || viewport === 'mobile') {
      onComplete?.();
    } else {
      startAnimation();
    }
  }, [prefersReducedMotion, viewport, startAnimation, onComplete]);

  /**
   * Convert text to particles by sampling visible pixels
   */
  const generateParticlesFromText = (
    canvas: HTMLCanvasElement,
    line: LineConfig,
    yOffset: number
  ) => {
    const offscreenCanvas = document.createElement('canvas');
    const ctx = offscreenCanvas.getContext('2d');

    if (!ctx) return;

    offscreenCanvas.width = canvas.width;
    offscreenCanvas.height = canvas.height;

    const fontSize = line.fontSize || 96;
    const fontWeight = line.fontWeight || 'bold';
    const fontFamily = line.fontFamily || 'Inter, sans-serif';

    // Draw text on offscreen canvas
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';

    const textX = canvas.width / 2;
    const textY = yOffset || canvas.height / 2;

    ctx.fillText(line.text, textX, textY);

    // Get image data
    const imageData = ctx.getImageData(
      0,
      0,
      offscreenCanvas.width,
      offscreenCanvas.height
    );
    const pixels = imageData.data;

    // Parse gradient colors
    const fromColor = hexToRgb(line.gradient.from);
    const toColor = hexToRgb(line.gradient.to);

    const density = getParticleDensity();
    const pixelStep = Math.max(1, 3 - density);

    // Create particles from text pixels
    for (let i = 0; i < pixels.length; i += pixelStep * 4) {
      const alpha = pixels[i + 3];

      if (alpha > 128) {
        const pixelIndex = i / 4;
        const x = pixelIndex % canvas.width;
        const y = Math.floor(pixelIndex / canvas.width);

        const particle = new Particle();

        // Random starting position
        particle.pos.x = Math.random() * canvas.width;
        particle.pos.y = Math.random() * canvas.height;

        // Target is the text position
        particle.target.x = x;
        particle.target.y = y;

        // Set speeds based on viewport
        if (viewport === 'tablet') {
          particle.maxSpeed = 3;
          particle.maxForce = 0.12;
        } else {
          particle.maxSpeed = 2.5;
          particle.maxForce = 0.15;
        }

        particle.particleSize = mergedConfig.particleSize;

        // Set colors
        const colorVariation = Math.random();
        particle.startColor = { r: 0, g: 0, b: 0, a: 1 };
        particle.targetColor = {
          r: Math.round(fromColor.r + (toColor.r - fromColor.r) * colorVariation),
          g: Math.round(fromColor.g + (toColor.g - fromColor.g) * colorVariation),
          b: Math.round(fromColor.b + (toColor.b - fromColor.b) * colorVariation),
          a: 1,
        };

        particlesRef.current.push(particle);
      }
    }
  };

  /**
   * Update particles based on animation phase
   */
  const updateParticles = () => {
    const particles = particlesRef.current;

    if (animationState.phase === 'flyIn') {
      // Particles flying towards target
      particles.forEach((p) => {
        p.move();
        p.colorWeight = 0; // Keep black during fly-in
      });
    } else if (animationState.phase === 'forming') {
      // Particles reaching target and forming text
      particles.forEach((p) => {
        p.move();
        // Gradually color in
        p.colorWeight = Math.min(p.colorWeight + 0.03, 1);
      });
    } else if (animationState.phase === 'holding') {
      // Particles holding position (text visible)
      particles.forEach((p) => {
        p.vel.x *= 0.95;
        p.vel.y *= 0.95;
        p.colorWeight = 1;
      });
    } else if (animationState.phase === 'dissolving') {
      // Particles dissolving away
      particles.forEach((p) => {
        if (!p.isKilled) {
          p.kill(canvasRef.current?.width || 1000, canvasRef.current?.height || 500);
        }
        p.move();
      });
    }
  };

  /**
   * Render particles to canvas
   */
  const renderParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const particles = particlesRef.current;

    // Remove dead particles that are off-screen
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (p.isKilled) {
        if (
          p.pos.x < -50 ||
          p.pos.x > ctx.canvas.width + 50 ||
          p.pos.y < -50 ||
          p.pos.y > ctx.canvas.height + 50
        ) {
          particles.splice(i, 1);
        }
      }
    }

    // Draw particles
    particles.forEach((p) => {
      p.draw(ctx);
    });
  };

  /**
   * Animation loop
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion || viewport === 'mobile') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Only initialize particles once at start
    if (particlesRef.current.length === 0 && animationState.phase === 'idle') {
      let yOffset = canvas.height / 2 - 80;
      lines.forEach((line) => {
        generateParticlesFromText(canvas, line, yOffset);
        yOffset += 120;
      });
    }

    const animate = () => {
      updateParticles();
      renderParticles(ctx);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationState.phase, lines, prefersReducedMotion, viewport]);

  /**
   * Setup canvas with high-DPI support
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.offsetWidth;
    const height = parent.offsetHeight;

    // High-DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }, [viewport]);

  // Skip rendering on mobile or with reduced motion
  if (prefersReducedMotion || viewport === 'mobile') {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
