<script lang="ts">
  import { courtainDown, courtainUp } from '$lib/customTransition';

  export let duration: number;
  export let delay: number;
  export let curtainAppears: boolean;

  $: factor = delay / 4;

  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let colors = ['#c6a5a5', '#e7c366', '#59a9de', '#344981', '#276244'];

  $: if (curtainAppears) {
    colors = shuffleArray(colors);
  }
</script>

{#if curtainAppears}
  <div
    class={`bg-[${colors[0]}] fixed inset-0 z-30 -translate-y-full will-change-transform`}
    in:courtainDown={{ duration }}
    out:courtainUp={{ duration, delay }}
  />
  <div
    class={`bg-[${colors[1]}] fixed inset-0 z-30 -translate-y-full will-change-transform`}
    in:courtainDown={{ duration, delay: delay - factor * 3 }}
    out:courtainUp={{ duration, delay: delay - factor }}
  />
  <div
    class={`bg-[${colors[2]}] fixed inset-0 z-30 -translate-y-full will-change-transform`}
    in:courtainDown={{ duration, delay: delay - factor * 2 }}
    out:courtainUp={{ duration, delay: delay - factor * 2 }}
  />
  <div
    class={`bg-[${colors[3]}] fixed inset-0 z-30 -translate-y-full will-change-transform`}
    in:courtainDown={{ duration, delay: delay - factor }}
    out:courtainUp={{ duration, delay: delay - factor * 3 }}
  />
{/if}
