<script lang="ts">
  import '../app.css';
  import Lenis from '@studio-freight/lenis';
  import { onMount } from 'svelte';
  import { showingTitle } from '$lib/store';
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import { onNavigate, beforeNavigate, goto, afterNavigate } from '$app/navigation';
  import PreviewTitle from '$lib/PreviewTitle.svelte';
  import Courtain from '$lib/Courtain.svelte';
  import Header from '$lib/Header.svelte';

  let lenis: Lenis;

  let curtainAppears = false;
  let curtainDisappears = false;
  let shouldGo = true;

  const duration = 5000;
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

  beforeNavigate(({ to, from, cancel }) => {
    if (shouldGo && from?.route.id !== to?.route.id) {
      console.log('before');
      curtainAppears = true;

      cancel();
      setTimeout(() => {
        shouldGo = false;
        goto(to?.route.id || '/');
      }, duration / 2);
    }
  });

  afterNavigate(() => {
    console.log('after');
    shouldGo = true;
    curtainAppears = false;
  });
</script>

<main
  class="px-3 lg:px-6 transition-opacity relative"
  style={`--op: ${$showingTitle !== '' ? 0.5 : 0}`}
>
  <Courtain {duration} {curtainAppears} />

  <PreviewTitle />

  <Header />

  <section class="mt-16 md:mt-28">
    <slot />
  </section>
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
