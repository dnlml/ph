<script lang="ts">
  import '../app.css';
  // import Lenis from '@studio-freight/lenis';
  // import { onMount } from 'svelte';
  import { showingTitle } from '$lib/store';
  // import { page } from '$app/stores';
  // import { browser } from '$app/environment';
  import PreviewTitle from '$lib/PreviewTitle.svelte';
  import Courtain from '$lib/Courtain.svelte';
  import Nav from '$lib/Nav.svelte';
  import { onNavigate } from '$app/navigation';
  import Footer from '$lib/Footer.svelte';

  // let lenis: Lenis;

  let curtainAppears = false;
  const duration = 500;
  const delay = 180;

  // onMount(() => {
  //   // lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   let rafId = requestAnimationFrame(raf);

  //   return () => {
  //     cancelAnimationFrame(rafId);
  //   };
  // });

  // $: if (browser && $page.status && lenis) {
  //   lenis.scrollTo(0, { immediate: true });
  // }

  onNavigate(({ from, to }) => {
    if (from?.route?.id === to?.route?.id) {
      return;
    }

    curtainAppears = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        curtainAppears = false;
      }, duration + delay);
    });
  });
</script>

<main
  class="px-3 lg:px-6 transition-opacity relative"
  style={`--op: ${$showingTitle !== '' ? 0.5 : 0}`}
>
  <Courtain {duration} {curtainAppears} {delay} />

  <PreviewTitle />

  <Nav />

  <section class="mt-16 md:mt-28">
    <slot />
  </section>

  <Footer />
</main>

<style>
  @media (min-width: 1024px) {
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
  }
</style>
