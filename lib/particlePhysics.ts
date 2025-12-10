/**
 * Particle Physics Engine
 * Handles particle movement, color transitions, and rendering
 */

export interface Vector2D {
  x: number;
  y: number;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * Particle class representing a single particle in the animation
 */
export class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };

  closeEnoughTarget = 100;
  maxSpeed = 2.0;
  maxForce = 0.15;
  particleSize = 2;
  isKilled = false;

  startColor: Color = { r: 0, g: 0, b: 0, a: 1 };
  targetColor: Color = { r: 0, g: 0, b: 0, a: 1 };
  colorWeight = 0;
  colorBlendRate = 0.02;

  /**
   * Update particle position based on steering behavior
   */
  move() {
    // Calculate distance to target
    const distance = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) +
        Math.pow(this.pos.y - this.target.y, 2)
    );

    // Slow down when close to target
    let proximityMult = 1;
    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget;
    }

    // Calculate vector towards target
    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    };

    const magnitude = Math.sqrt(
      towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y
    );

    // Normalize and apply speed
    if (magnitude > 0) {
      towardsTarget.x =
        (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult;
      towardsTarget.y =
        (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult;
    }

    // Calculate steering force
    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    };

    const steerMagnitude = Math.sqrt(
      steer.x * steer.x + steer.y * steer.y
    );

    // Limit steering force
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce;
      steer.y = (steer.y / steerMagnitude) * this.maxForce;
    }

    // Apply forces
    this.acc.x += steer.x;
    this.acc.y += steer.y;

    // Update velocity and position
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // Reset acceleration
    this.acc.x = 0;
    this.acc.y = 0;
  }

  /**
   * Render particle to canvas
   */
  draw(ctx: CanvasRenderingContext2D) {
    // Blend towards target color
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(
        this.colorWeight + this.colorBlendRate,
        1.0
      );
    }

    // Calculate current color
    const currentColor = {
      r: Math.round(
        this.startColor.r +
          (this.targetColor.r - this.startColor.r) * this.colorWeight
      ),
      g: Math.round(
        this.startColor.g +
          (this.targetColor.g - this.startColor.g) * this.colorWeight
      ),
      b: Math.round(
        this.startColor.b +
          (this.targetColor.b - this.startColor.b) * this.colorWeight
      ),
      a:
        this.startColor.a +
        (this.targetColor.a - this.startColor.a) * this.colorWeight,
    };

    // Draw particle
    ctx.fillStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a})`;
    ctx.beginPath();
    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.particleSize / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // Draw glow effect
    ctx.strokeStyle = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a * 0.5})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  /**
   * Start dissolve animation
   */
  kill(width: number, height: number) {
    if (!this.isKilled) {
      // Set target outside the scene
      const randomPos = this.generateRandomPos(
        width / 2,
        height / 2,
        (width + height) / 2
      );
      this.target.x = randomPos.x;
      this.target.y = randomPos.y;

      // Blend current color to black
      this.startColor = {
        r:
          this.startColor.r +
          (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g:
          this.startColor.g +
          (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b:
          this.startColor.b +
          (this.targetColor.b - this.startColor.b) * this.colorWeight,
        a:
          this.startColor.a +
          (this.targetColor.a - this.startColor.a) * this.colorWeight,
      };
      this.targetColor = { r: 0, g: 0, b: 0, a: 0 };
      this.colorWeight = 0;

      this.isKilled = true;
    }
  }

  private generateRandomPos(x: number, y: number, mag: number): Vector2D {
    const randomX = Math.random() * 1000;
    const randomY = Math.random() * 500;

    const direction = {
      x: randomX - x,
      y: randomY - y,
    };

    const magnitude = Math.sqrt(
      direction.x * direction.x + direction.y * direction.y
    );

    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag;
      direction.y = (direction.y / magnitude) * mag;
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    };
  }
}

/**
 * Easing functions for animations
 */
export const easing = {
  easeInOutCubic: (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },

  easeOutQuad: (t: number): number => {
    return t * (2 - t);
  },

  easeInQuad: (t: number): number => {
    return t * t;
  },

  linear: (t: number): number => {
    return t;
  },
};

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): Color {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return { r: 0, g: 0, b: 0, a: 1 };
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1,
  };
}
