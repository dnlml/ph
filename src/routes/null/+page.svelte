<script lang="ts">
  import Img from '@zerodevx/svelte-img';
  import tree from '$lib/assets/images/tree.jpg?as=run';
  import metaTree from '$lib/assets/images/tree.jpg?as=meta';
  import yellow from '$lib/assets/images/yellow.jpg?as=run';
  import metaYellow from '$lib/assets/images/yellow.jpg?as=meta';

  console.log(metaTree);
</script>

<section class="wrapper flex flex-col items-center justify-center">
  <h1 class="serif text-6xl uppercase font-light">null</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae possimus est omnis
    nobis sit vero provident, quidem dicta corporis natus doloremque adipisci quibusdam itaque
    nostrum quis veritatis neque dolor.
  </p>
</section>

<div class="wrapper" style={`aspect-ratio: ${metaTree.width / metaTree.height}`}>
  <Img class={`img`} src={tree} alt="tree" loading="eager" />
</div>
<div class="wrapper" style={`aspect-ratio: ${metaYellow.width / metaYellow.height}`}>
  <Img class="img" src={yellow} alt="yellow" loading="eager" />
</div>

<style>
  .wrapper {
    margin: 0 auto;
    padding: 60px;
    height: 100vh;
  }
</style>
