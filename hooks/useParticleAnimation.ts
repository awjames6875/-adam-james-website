'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export type AnimationPhase =
  | 'idle'
  | 'flyIn'
  | 'forming'
  | 'holding'
  | 'dissolving'
  | 'complete';

export interface ParticleAnimationState {
  phase: AnimationPhase;
  progress: number;
  showNormalText: boolean;
  isAnimating: boolean;
}

export interface ParticleAnimationConfig {
  startDelay?: number;
  flyInDuration?: number;
  formingDuration?: number;
  holdingDuration?: number;
  dissolvingDuration?: number;
  fadeInDuration?: number;
}

const DEFAULT_CONFIG: Required<ParticleAnimationConfig> = {
  startDelay: 500,
  flyInDuration: 2000,
  formingDuration: 500,
  holdingDuration: 500,
  dissolvingDuration: 500,
  fadeInDuration: 500,
};

/**
 * Hook to manage particle animation state machine
 * Orchestrates the entire animation sequence and lifecycle
 */
export function useParticleAnimation(
  config: ParticleAnimationConfig = {},
  onComplete?: () => void
) {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const [state, setState] = useState<ParticleAnimationState>({
    phase: 'idle',
    progress: 0,
    showNormalText: false,
    isAnimating: false,
  });

  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const phaseStartTimeRef = useRef<number>();

  /**
   * Calculate total animation duration
   */
  const getTotalDuration = useCallback(() => {
    return (
      mergedConfig.startDelay +
      mergedConfig.flyInDuration +
      mergedConfig.formingDuration +
      mergedConfig.holdingDuration +
      mergedConfig.dissolvingDuration +
      mergedConfig.fadeInDuration
    );
  }, [mergedConfig]);

  /**
   * Get phase duration in milliseconds
   */
  const getPhaseDuration = useCallback(
    (phase: AnimationPhase): number => {
      switch (phase) {
        case 'idle':
          return mergedConfig.startDelay;
        case 'flyIn':
          return mergedConfig.flyInDuration;
        case 'forming':
          return mergedConfig.formingDuration;
        case 'holding':
          return mergedConfig.holdingDuration;
        case 'dissolving':
          return mergedConfig.dissolvingDuration;
        case 'complete':
          return mergedConfig.fadeInDuration;
        default:
          return 0;
      }
    },
    [mergedConfig]
  );

  /**
   * Get next phase in sequence
   */
  const getNextPhase = useCallback((current: AnimationPhase): AnimationPhase => {
    switch (current) {
      case 'idle':
        return 'flyIn';
      case 'flyIn':
        return 'forming';
      case 'forming':
        return 'holding';
      case 'holding':
        return 'dissolving';
      case 'dissolving':
        return 'complete';
      case 'complete':
        return 'complete';
      default:
        return 'complete';
    }
  }, []);

  /**
   * Animation loop
   */
  useEffect(() => {
    // Don't start if animation is disabled
    if (!state.isAnimating) return;

    const animate = (currentTime: number) => {
      // Initialize timing on first frame
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
        phaseStartTimeRef.current = currentTime;
      }

      const elapsedTime = currentTime - startTimeRef.current;
      const phaseElapsedTime = currentTime - (phaseStartTimeRef.current || currentTime);

      // Get current phase duration
      const phaseDuration = getPhaseDuration(state.phase);

      // Check if phase is complete
      if (phaseElapsedTime >= phaseDuration && state.phase !== 'complete') {
        // Move to next phase
        const nextPhase = getNextPhase(state.phase);

        if (nextPhase === 'complete') {
          // Animation complete
          setState({
            phase: 'complete',
            progress: 1,
            showNormalText: true,
            isAnimating: false,
          });
          onComplete?.();
          return;
        }

        phaseStartTimeRef.current = currentTime;
        setState((prev) => ({
          ...prev,
          phase: nextPhase,
          progress: 0,
        }));
      } else {
        // Update progress for current phase
        const phaseProgress = Math.min(phaseElapsedTime / phaseDuration, 1);
        setState((prev) => ({
          ...prev,
          progress: phaseProgress,
        }));
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [state.phase, state.isAnimating, getPhaseDuration, getNextPhase, onComplete]);

  /**
   * Start animation
   */
  const start = useCallback(() => {
    startTimeRef.current = undefined;
    phaseStartTimeRef.current = undefined;
    setState({
      phase: 'idle',
      progress: 0,
      showNormalText: false,
      isAnimating: true,
    });
  }, []);

  /**
   * Reset animation
   */
  const reset = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    startTimeRef.current = undefined;
    phaseStartTimeRef.current = undefined;
    setState({
      phase: 'idle',
      progress: 0,
      showNormalText: false,
      isAnimating: false,
    });
  }, []);

  return {
    state,
    start,
    reset,
    getTotalDuration,
  };
}
