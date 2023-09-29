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

export function opacityIn(node: HTMLElement, params: TransitionConfig): TransitionConfig {
  return {
    duration: params.duration || 300,
    css: (t: number) => {
      const eased = easeOutExpo(t) * 0.5;

      return `background-color: rgba(255,255,255, ${eased});`;
    },
    tick: (t: number, u: number) => {
      if (u === 0) {
        node.style.backgroundColor = 'rgba(255,255,255, 0.5)';
      }
    }
  };
}
