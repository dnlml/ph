<script lang="ts">
  import { showingTitle, loaded } from '$lib/store';
  import Img from '@zerodevx/svelte-img';
  import { down } from './customTransition';

  export let src: any;
  export let alt: string;
  export let aspect: string;
  export let projectUrl: string;
  export let title: string = '';

  export let imageClasses: string = '';
  export let metaClasses: string = '';

  export let loading: 'eager' | 'lazy' = 'lazy';

  const setTitle = () => {
    showingTitle.set(title);
  };

  const unsetTitle = () => {
    showingTitle.set('');
  };
</script>

<div class={`${imageClasses} overflow-hidden relative`}>
  {#if !$loaded}
    <span class="absolute bg-white inset-0" out:down={{ duration: 1000 }} />
  {/if}

  <a
    class="block hue"
    href={projectUrl}
    style={`aspect-ratio: ${aspect}`}
    on:mouseenter={setTitle}
    on:mouseleave={unsetTitle}
    on:click={unsetTitle}
  >
    <Img class="h-full w-full" {src} factor={0.91} {alt} {loading} />
  </a>
</div>

<div class={`lg:hidden ${metaClasses}`}>
  {#if title.length}
    <div>{title}</div>
  {/if}
</div>

<style>
  :global(.hue img) {
    transition: filter 0.9s;
  }

  @media (min-width: 1024px) {
    :global(.hue:hover img) {
      filter: grayscale(100%) brightness(1.1);
    }
  }
</style>
