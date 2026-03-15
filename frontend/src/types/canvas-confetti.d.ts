declare module 'canvas-confetti' {
  export interface Options {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    shapes?: string[];
    scalar?: number;
    zIndex?: number;
    disableForReducedMotion?: boolean;
    useWorker?: boolean;
    resize?: boolean;
    canvas?: HTMLCanvasElement;
  }

  export interface CreateTypesConfetti {
    (options?: Options): void;
    reset(): void;
  }

  export default function confetti(options?: Options): void;
  export function create(canvas: HTMLCanvasElement): CreateTypesConfetti;
}
