<script lang="ts">
  import Img from '@zerodevx/svelte-img';

  const images = import.meta.glob('$lib/assets/images/libere/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'run' }
  });

  const metas = import.meta.glob('$lib/assets/images/libere/*.*', {
    import: 'default',
    eager: true,
    query: { as: 'meta' }
  });

  const srcs = Object.entries(images).map((i) => i[1]);
  const aspect = Object.entries(metas).map((i) => i[1]) as { width: number; height: number }[];
</script>

<section class="grid grid-rows-2 min-h-[100dvh] md:-mt-28">
  <div class="row-start-2">
    <h1 class="serif text-6xl uppercase font-light text-center -translate-y-1/2">Libere</h1>
  </div>
</section>

<div class="-mt-4 md:-mt-28 grid md:grid-cols-5 gap-5 rows-template">
  {#each srcs as src, i}
    <div
      class={`image${i} max-height`}
      class:-mt-2={i === 0}
      class:md:mt-0={i === 0}
      style={`aspect-ratio: ${aspect[i].width / aspect[i].height}`}
    >
      <Img {src} alt="" loading={i <= 1 ? 'eager' : 'lazy'} />
    </div>
  {/each}
</div>

<style>
  @media (min-width: 768px) {
    .rows-template {
      grid-template-rows: repeat(14, minmax(66dvh, auto));
    }

    .image0 {
      grid-row: 1;
      grid-column: 2 / 5;
    }

    .image1 {
      grid-row: 3;
      grid-column: 2 / 5;
    }

    .image2 {
      grid-row: 5;
      grid-column: 3 / 6;
    }

    .image3 {
      grid-row: 7;
      grid-column: 2 / 5;
    }

    .image4 {
      grid-row: 9;
      grid-column: 2 / 4;
    }

    .image5 {
      grid-row: 11;
      grid-column: 5 / 6;
    }

    .image6 {
      grid-row: 11;
      grid-column: 1 / 4;
    }

    .image7 {
      grid-row: 13;
      grid-column: 2 / 5;
    }
  }
</style>
