<script lang="ts">
  import Img from '@zerodevx/svelte-img';

  const images = import.meta.glob('$lib/assets/images/null/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'run' }
  });

  const metas = import.meta.glob('$lib/assets/images/null/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'meta' }
  });

  const srcs = Object.entries(images).map((i) => i[1]);
  const aspect = Object.entries(metas).map((i) => i[1]) as { width: number; height: number }[];
</script>

<section class="grid grid-rows-2 h-[90dvh] -mt-2 md:-mt-28">
  <div class="row-start-2">
    <h1 class="serif text-6xl uppercase font-light text-center">null</h1>
    <p class="mx-auto max-w-md text-center">Nothing less, nothing more</p>
  </div>
</section>

{#each srcs as src, i}
  <div
    class="wrapper"
    class:-mt-2={i === 0}
    class:md:-mt-8={i === 0}
    style={`aspect-ratio: ${aspect[i].width / aspect[i].height}`}
  >
    <Img {src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
  </div>
{/each}

<style>
  h1 {
    transform: translateY(-50%);
  }
</style>
