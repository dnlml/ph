<script>
  import yellow from '$lib/assets/images/yellow.jpg?as=run';
  import crepes from '$lib/assets/images/crepes.jpg?as=run';
  import adrian from '$lib/assets/images/adrian.jpg?as=run';
  import Img from '@zerodevx/svelte-img';
</script>

<section class="grid grid-cols-6 grid-flow-row gap-6 auto-rows-min p-11">
  <div class="col-start-1 col-end-4">
    <div class="aspect-square">
      <Img src={yellow} alt="A yellow box on the beach" class="h-full w-full" />
    </div>
  </div>

  <div class="row-start-2 col-start-3 col-end-6">
    <div class="aspect-[3420/2216]">
      <Img src={crepes} alt="" class="h-full w-full" />
    </div>
  </div>

  <div class="row-start-3 col-start-2 col-end-5">
    <div class="aspect-[6196/5061]">
      <Img src={adrian} alt="" class="h-full w-full" />
    </div>
  </div>
</section>
