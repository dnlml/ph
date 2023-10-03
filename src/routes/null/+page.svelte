<script lang="ts">
  import Img from '@zerodevx/svelte-img';
  import tree from '$lib/assets/images/tree.jpg?as=run';
  import metaTree from '$lib/assets/images/tree.jpg?as=meta';
  import yellow from '$lib/assets/images/yellow.jpg?as=run';
  import metaYellow from '$lib/assets/images/yellow.jpg?as=meta';
</script>

<section class="grid grid-rows-2 h-screen -mt-28">
  <div class="row-start-2">
    <h1 class="serif text-6xl uppercase font-light text-center">null</h1>
    <p class="mx-auto max-w-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ullam facere voluptates ipsa
      modi eaque unde asperiores deserunt, praesentium mollitia sit inventore molestias. Numquam
      praesentium maiores minima vero sequi. Nesciunt?
    </p>
  </div>
</section>

<div class="wrapper" style={`aspect-ratio: ${metaTree.width / metaTree.height}`}>
  <Img class={`img`} src={tree} alt="tree" />
</div>
<div class="wrapper" style={`aspect-ratio: ${metaYellow.width / metaYellow.height}`}>
  <Img class="img" src={yellow} alt="yellow" />
</div>

<style>
  .wrapper {
    margin: 0 auto;
    padding: 60px;
    height: 100vh;
  }

  h1 {
    transform: translateY(-50%);
  }
</style>
