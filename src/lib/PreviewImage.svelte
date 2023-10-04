<script lang="ts">
  import { showingTitle } from '$lib/store';
  import Img from '@zerodevx/svelte-img';

  export let src: any;
  export let alt: string;
  export let aspect: string;
  export let projectUrl: string;
  export let meta: string[] = [];

  export let imageClasses: string = '';
  export let metaClasses: string = '';

  export let loading: 'eager' | 'lazy' = 'lazy';

  const onMouseEnter = () => {
    showingTitle.set(meta[1]);
  };

  const onMouseOut = () => {
    showingTitle.set('');
  };
</script>

<div class={imageClasses}>
  <a
    class="block hue"
    href={projectUrl}
    style={`aspect-ratio: ${aspect}`}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseOut}
    on:click={onMouseOut}
  >
    <Img class="h-full w-full" {src} factor={0.91} {alt} {loading} />
  </a>
</div>

<div class={`lg:hidden ${metaClasses}`}>
  {#if meta.length}
    {#each meta as line}
      <div>{line}</div>
    {/each}
  {/if}
</div>

<style>
  :global(.hue img) {
    transition: filter 0.9s;
  }

  :global(.hue:hover img) {
    filter: grayscale(100%) brightness(1.1);
  }
</style>
