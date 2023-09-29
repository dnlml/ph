<script>
  import yellow from '$lib/assets/images/yellow.jpg?as=run';
  import crepes from '$lib/assets/images/crepes.jpg?as=run';
  import adrian from '$lib/assets/images/adrian.jpg?as=run';
  import twelve from '$lib/assets/images/12.png?as=run';
  import tree from '$lib/assets/images/tree.jpg?as=run';
  import fourtySeleven from '$lib/assets/images/47.jpg?as=run';

  import PreviewImage from '$lib/PreviewImage.svelte';
</script>

<div class="relative mt-12">
  <section class="md:absolute md:z-10 mb-12">
    <div>37 y/o italian photographer</div>
    <div>barcelona based</div>
    <div>hi@danielemeli.com</div>
    <div>@danielemeli</div>
  </section>

  <section class="grid grid-cols-5 grid-flow-row gap-3 lg:gap-6 auto-rows-min">
    <div
      class="lg:grid grid-cols-4 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-2 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={tree}
        alt="One tree and a nice yellow"
        meta={['[12]', 'null', '2018', '41.40291926855, 2.1288699428661']}
        aspect="1/1"
        loading="eager"
        imageClasses="md:col-start-2 md:col-end-5"
        metaClasses="pt-2 md:row-start-1 md:col-span-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./hi"
      />
    </div>
    <div
      class="lg:grid grid-cols-3 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-end-4 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={crepes}
        alt=""
        meta={[
          '[37]',
          'humans were here',
          '2018-2019',
          '41.41790458068, 2.228891770447075',
          '51.52022099027, -0.09356109319664'
        ]}
        aspect="3420/2216"
        imageClasses="md:col-start-1 md:col-end-3"
        metaClasses="pt-2 md:col-span-1 md:flex flex-col md:items-start md:justify-end"
        projectUrl="./hi"
      />
    </div>
    <div
      class="lg:grid grid-cols-2 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-4 mb-12 lg:mb-52 auto-rows-min"
    >
      <PreviewImage
        src={twelve}
        alt=""
        meta={[
          '[12]',
          "Agosto '94",
          '2020',
          '41.41790458068443, 2.228891770447075',
          '51.52022099027464, -0.09356109319664'
        ]}
        aspect="2000/1610"
        imageClasses="image md:col-start-2 md:col-end-3"
        metaClasses="meta pt-2 md:col-start-1 md:col-end-2 row-start-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./hi"
      />
    </div>
    <div
      class="lg:grid grid-cols-2 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-3 md:col-end-5 mb-12 lg:mb-52 auto-rows-min"
    >
      <PreviewImage
        src={fourtySeleven}
        alt=""
        meta={[
          '[37]',
          'humans were here',
          '2018-2019',
          '41.41790458068443, 2.228891770447075',
          '51.52022099027464, -0.09356109319664'
        ]}
        aspect="2195/3319"
        imageClasses="image md:col-start-2 md:col-end-3"
        metaClasses="meta pt-2 md:col-start-1 md:col-end-2 row-start-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./hi"
      />
    </div>
    <div
      class="lg:grid grid-cols-4 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-1 md:col-end-3 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={yellow}
        alt="One tree and a nice yellow"
        meta={['[12]', 'null', '2018', '41.40291926855, 2.1288699428661']}
        aspect="1/1"
        loading="eager"
        imageClasses="md:col-start-2 md:col-end-5"
        metaClasses="pt-2 md:row-start-1 md:col-span-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./hi"
      />
    </div>
  </section>
</div>
