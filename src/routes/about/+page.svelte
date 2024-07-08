<script lang="ts">
  import Img from '@zerodevx/svelte-img';
  // import Dm from '$lib/assets/images/dm.jpg?as=run';
  import Me from '$lib/assets/images/me.jpg?as=run';

  const a = [1, 2, 3, 4, 5];

  for (let i = 0, j = a.length; i < j; i++) {
    if (a[i] === 5) {
      a[i] = 9;
    }
  }

  console.log('Very usefull!', a);
</script>

<section class="grid md:grid-cols-2 min-h-[100dvh] gap-12 items-center md:-mt-28">
  <div class="max-w-xl justify-self-center md:justify-self-end">
    <p>
      Italian photographer based in Barcelona since 2014.
      <br />
      I considers the world a playground to explore within different disciplines.
      <br />
      Photography being one of particular interest, I discovered the slow analogue process, the creativity
      behind the creation of a photobook and the beauty of this art.
    </p>
  </div>
  <div class="max-w-xl justify-self-center md:justify-self-start">
    <!-- <Img src={Dm} /> -->
    <Img src={Me} />
  </div>
</section>
