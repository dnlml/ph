<script lang="ts">
  import { courtainDown, courtainUp } from '$lib/customTransition';

  export let duration: number;
  export let delay: number;
  export let curtainAppears: boolean;

  $: factor = delay / 4;
</script>

{#if curtainAppears}
  <div
    class="bg-neutral-600 fixed inset-0 z-30 -translate-y-full will-change-transform"
    in:courtainDown={{ duration }}
    out:courtainUp={{ duration, delay }}
  />
  <div
    class="bg-neutral-700 fixed inset-0 z-30 -translate-y-full will-change-transform"
    in:courtainDown={{ duration, delay: delay - factor * 3 }}
    out:courtainUp={{ duration, delay: delay - factor }}
  />
  <div
    class="bg-neutral-800 fixed inset-0 z-30 -translate-y-full will-change-transform"
    in:courtainDown={{ duration, delay: delay - factor * 2 }}
    out:courtainUp={{ duration, delay: delay - factor * 2 }}
  />
  <div
    class="bg-black fixed inset-0 z-30 -translate-y-full will-change-transform"
    in:courtainDown={{ duration, delay: delay - factor }}
    out:courtainUp={{ duration, delay: delay - factor * 3 }}
  />
{/if}
