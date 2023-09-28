<script lang="ts">
  import { customTransitionIn, customTransitionOut } from './customTransition';
  import { FxParallax as Img } from '@zerodevx/svelte-img';

  export let src: any;
  export let alt: string;
  export let aspect: string;
  export let projectUrl: string;
  export let meta: string[] = [];

  export let imageClasses: string = '';
  export let metaClasses: string = '';

  export let loading: 'eager' | 'lazy' = 'lazy';

  let isTitleVisible = false;

  const onMouseEnter = () => {
    isTitleVisible = true;
  };

  const onMouseOut = () => {
    isTitleVisible = false;
  };
</script>

{#if isTitleVisible}
  <div class="fixed inset-0 flex items-center justify-center text-8xl">
    <div class="overflow-hidden">
      <div
        class="translate-y-full mb-9"
        in:customTransitionIn={{ duration: 900 }}
        out:customTransitionOut={{ duration: 400 }}
      >
        {meta[1]}
      </div>
    </div>
  </div>
{/if}

<div class={imageClasses}>
  <a
    class="block mix-blend-color"
    href={projectUrl}
    style={`aspect-ratio: ${aspect}`}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseOut}
  >
    <Img class="h-full w-full" {src} factor={0.95} {alt} {loading} />
  </a>
</div>

<div class={`lg:hidden ${metaClasses}`}>
  {#if meta.length}
    {#each meta as line}
      <div>{line}</div>
    {/each}
  {/if}
</div>
