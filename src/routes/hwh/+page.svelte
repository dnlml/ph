<script lang="ts">
  import Img from '@zerodevx/svelte-img';

  const images = import.meta.glob('$lib/assets/images/hwh/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'run' }
  });

  const metas = import.meta.glob('$lib/assets/images/hwh/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'meta' }
  });

  const srcs = Object.entries(images).map((i) => i[1]);
  const aspect = Object.entries(metas).map((i) => i[1]) as { width: number; height: number }[];
</script>

<section class="grid grid-rows-2 h-[90dvh] -mt-2 md:-mt-28">
  <div class="row-start-2">
    <h1 class="serif text-6xl uppercase font-light text-center">humans were here</h1>
    <p class="mx-auto max-w-md">
      Flowers, buildings, food, plastic. A collection of traces that humans left in the artificial
      context they built over the years. Signs created in the present can suddenly become part of
      the past, where they represent things that no longer exist. <br />Nothing is written to last
      forever; sometimes it is worth to dedicate a look to currently insignificant future traces.
      <br /><br />
      Look (and
      <a
        href="https://open.spotify.com/playlist/1ycyKb9zMdpMwTgLRyC3WP?si=fd77bc31d8894686"
        target="_blank">listen</a
      >).
    </p>
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
