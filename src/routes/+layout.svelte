<script lang="ts">
  import '../app.css';
  import { customTransitionIn, customTransitionOut } from '$lib/customTransition';
  import Lenis from '@studio-freight/lenis';
  import { onMount } from 'svelte';
  import { showingTitle } from '$lib/store';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';

  let lenis: Lenis;
  onMount(() => {
    lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    let rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
    };
  });

  $: if (browser && $page.status && lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
</script>

{#if $showingTitle !== ''}
  <div
    class="fixed inset-0 hidden md:flex items-center justify-center text-6xl uppercase z-40 pointer-events-none serif"
  >
    <div class="overflow-hidden px-3">
      <div
        class="translate-y-full my-9"
        in:customTransitionIn={{ duration: 900 }}
        out:customTransitionOut={{ duration: 400 }}
      >
        {$showingTitle}
      </div>
    </div>
  </div>
{/if}

<main
  class="px-3 lg:px-6 transition-opacity relative"
  style={`--op: ${$showingTitle !== '' ? 0.5 : 0}`}
>
  <nav class="h-16 md:h-28 sticky top-0 z-10 mix-blend-difference">
    <div class="flex justify-between items-center h-full">
      <h1 class="text-xl">
        <a href="/">Daniele Meli</a>
      </h1>
      <a href="/about">about</a>
    </div>
  </nav>
  <slot />
</main>

<style>
  main::before {
    content: '';
    position: absolute;
    transition: opacity 0.5s;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    opacity: var(--op);
    z-index: 1;
    pointer-events: none;
  }
</style>
