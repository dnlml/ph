import type { TransitionConfig } from 'svelte/transition';

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function customTransitionIn(node: HTMLElement, params: TransitionConfig): TransitionConfig {
  return {
    duration: params.duration || 300,
    css: (t: number) => {
      const eased = easeOutExpo(t);
      const translation = 100 - eased * 100;

      return `opacity: ${eased}; transform: translateY(${translation}%)`;
    },
    tick: (t: number, u: number) => {
      if (u === 0) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0%)';
      }
    }
  };
}

export function customTransitionOut(node: HTMLElement, params: TransitionConfig): TransitionConfig {
  return {
    duration: params.duration || 300,
    css: (t: number) => {
      const eased = easeOutExpo(t);
      const translation = 100 - eased * 100;

      return `opacity: ${eased}; transform: translateY(-${translation}%)`;
    },
    tick: (t: number, u: number) => {
      if (u === 0) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0%)';
      }
    }
  };
}

export function courtainDown(node: HTMLElement, params: TransitionConfig): TransitionConfig {
  return {
    duration: params.duration,
    delay: params.delay || 0,
    css: (t: number) => {
      const eased = easeOutExpo(t) * 100 - 100;

      return `transform: translateY(${eased}%)`;
    },
    tick(t, u) {
      if (u === 0) {
        node.style.transform = 'translateY(0%)';
      }
    }
  };
}

export function courtainUp(node: HTMLElement, params: TransitionConfig): TransitionConfig {
  return {
    duration: params.duration,
    delay: params.delay || 0,
    css: (t: number) => {
      const eased = (1 - easeOutExpo(t)) * 100;

      return `transform: translateY(${eased}%)`;
    }
  };
}
