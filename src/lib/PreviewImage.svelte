<script lang="ts">
  import { showingTitle, loaded } from '$lib/store';
  import { FxParallax as Img } from '@zerodevx/svelte-img';
  import { down } from './customTransition';

  export let src: any;
  export let alt: string;
  export let aspect: string;
  export let projectUrl: string;
  export let title = '';

  export let imageClasses = '';
  export let metaClasses = '';

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
    <span class="absolute bg-white inset-0 z-20" out:down={{ duration: 1000 }} />
  {/if}

  <a
    class="block"
    class:hue={$loaded}
    href={projectUrl}
    style={`aspect-ratio: ${aspect}`}
    on:mouseenter={setTitle}
    on:mouseleave={unsetTitle}
    on:click={unsetTitle}
  >
    <Img class="h-full w-full" {...{ src, alt, loading }} factor={0.91} />
  </a>
</div>

<div class={`lg:hidden ${metaClasses}`}>
  {#if title.length}
    <div>{title}</div>
  {/if}
</div>

<style>
  :global(.hue) {
    transition: all 0.9s;
  }

  @media (min-width: 1024px) {
    :global(.hue:hover) {
      filter: grayscale(100%) brightness(1.1);
    }
  }
</style>
