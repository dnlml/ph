import type { TransitionConfig } from 'svelte/transition';

function easeOutExpo(x: number): number {
  if (x < 0.5) {
    return 0.5 * Math.pow(2, 20 * x - 10);
  } else {
    return 1 - 0.5 * Math.pow(2, -20 * x + 10);
  }
}

function easeInOutExpoPlateau(x: number): number {
  const plateau = 0.2; // 20% plateau
  const ease = 0.4; // 40% ease in, 40% ease out

  if (x < ease) {
    // Ease in phase
    return 0.5 * Math.pow(2, (20 * x) / ease - 10);
  } else if (x < ease + plateau) {
    // Plateau phase
    return 1;
  } else {
    // Ease out phase
    const adjustedX = (x - ease - plateau) / ease;
    return 1 - 0.5 * Math.pow(2, -20 * adjustedX + 10);
  }
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
    duration: params.duration || 300,
    css: (t: number) => {
      const eased = easeOutExpo(t) * 200 - 100;

      return `transform: translateY(${eased}%)`;
    }
  };
}
