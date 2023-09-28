<script lang="ts">
  import '../app.css';
  import Lenis from '@studio-freight/lenis';
  import { onMount } from 'svelte';

  onMount(() => {
    let lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    let rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
    };
  });
</script>

<main class="px-3 lg:px-6">
  <nav class="h-16 md:h-28 sticky top-0 z-10 mix-blend-difference">
    <div class="flex justify-between items-center h-full">
      <h1 class="text-xl">Daniele Meli</h1>
      <a href="/about">about</a>
    </div>
  </nav>
  <slot />
</main>
