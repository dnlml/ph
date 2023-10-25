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

<section class="grid grid-rows-2 h-[100dvh] md:-mt-28 mb-20">
  <div class="row-start-2">
    <h1 class="serif text-6xl uppercase font-light text-center -translate-y-1/2">
      humans were here
    </h1>
    <p class="mx-auto max-w-md mb-10">
      Flowers, buildings, food, plastic. A collection of traces that humans left in the artificial
      context they built over the years. Signs created in the present can suddenly become part of
      the past, where they represent things that no longer exist. <br />Nothing is written to last
      forever; sometimes it is worth to dedicate a look to currently insignificant future traces.
      <br /><br />
      Look (and
      <a
        class="underline underline-offset-2"
        href="https://open.spotify.com/playlist/1ycyKb9zMdpMwTgLRyC3WP?si=fd77bc31d8894686"
        target="_blank">listen</a
      >).
    </p>
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
      <div class="md:hidden">
        <Img {src} alt="" loading={i === 0 ? 'eager' : 'lazy'} factor={1} />
      </div>
      <div class="hidden md:block">
        <Img {src} alt="" loading={i <= 1 ? 'eager' : 'lazy'} factor={0.91} />
      </div>
    </div>
  {/each}
</div>

<style>
  @media (min-width: 768px) {
    .rows-template {
      grid-template-rows: repeat(57, minmax(66dvh, auto));
    }

    .image0 {
      grid-row: 1;
      grid-column: 3 / 6;
    }

    .image1 {
      grid-row: 1;
      grid-column: 1 / 2;
    }

    .image2 {
      grid-row: 3;
      grid-column: 1 / 3;
    }

    .image3 {
      grid-row: 5;
      grid-column: 3 / 4;
    }

    .image4 {
      grid-row: 7;
      grid-column: 2/ 4;
    }

    .image5 {
      grid-row: 7;
      grid-column: 5 / 6;
    }

    .image6 {
      grid-row: 9;
      grid-column: 2 / 5;
    }

    .image7 {
      grid-row: 11;
      grid-column: 4 / 6;
    }

    .image8 {
      grid-row: 13;
      grid-column: 1 / 3;
    }

    .image9 {
      grid-row: 15;
      grid-column: 4 / 6;
    }

    .image10 {
      grid-row: 16;
      grid-column: 3 / 6;
    }

    .image11 {
      grid-row: 16;
      grid-column: 1 / 2;
    }

    .image12 {
      grid-row: 18;
      grid-column: 1 / 3;
    }

    .image13 {
      grid-row: 20;
      grid-column: 3 / 4;
    }

    .image14 {
      grid-row: 22;
      grid-column: 1 / 4;
    }

    .image15 {
      grid-row: 22;
      grid-column: 5 / 6;
    }

    .image16 {
      grid-row: 24;
      grid-column: 3 / 4;
    }

    .image17 {
      grid-row: 26;
      grid-column: 4 / 6;
    }

    .image18 {
      grid-row: 28;
      grid-column: 1 / 2;
    }

    .image19 {
      grid-row: 28;
      grid-column: 3 / 6;
    }

    .image20 {
      grid-row: 32;
      grid-column: 1 / 3;
    }

    .image21 {
      grid-row: 30;
      grid-column: 3 / 4;
    }

    .image22 {
      grid-row: 33;
      grid-column: 1 / 3;
    }

    .image23 {
      grid-row: 35;
      grid-column: 2 / 5;
    }

    .image24 {
      grid-row: 37;
      grid-column: 1 / 4;
    }

    .image25 {
      grid-row: 37;
      grid-column: 4 / 5;
    }

    .image26 {
      grid-row: 39;
      grid-column: 3 / 4;
    }

    .image27 {
      grid-row: 40;
      grid-column: 1 / 3;
    }

    .image28 {
      grid-row: 42;
      grid-column: 2 / 5;
    }

    .image29 {
      grid-row: 44;
      grid-column: 3 / 6;
    }

    .image30 {
      grid-row: 46;
      grid-column: 2 / 4;
    }

    .image31 {
      grid-row: 48;
      grid-column: 3 / 4;
    }

    .image32 {
      grid-row: 50;
      grid-column: 1 / 3;
    }

    .image33 {
      grid-row: 50;
      grid-column: 4 / 6;
    }

    .image34 {
      grid-row: 52;
      grid-column: 3 / 4;
    }

    .image35 {
      grid-row: 54;
      grid-column: 2 / 5;
    }

    .image36 {
      grid-row: 56;
      grid-column: 2 / 4;
    }
  }
</style>
