<script lang="ts">
  import yellow from '$lib/assets/images/null/03.jpg?as=run';
  import eleven from '$lib/assets/images/hwh/11.jpg?as=run';
  import adrian from '$lib/assets/images/libere/adrian.jpg?as=run';
  import twelve from '$lib/assets/images/agosto94/12.jpg?as=run';
  import tree from '$lib/assets/images/null/10.jpg?as=run';
  import thirthyFour from '$lib/assets/images/hwh/34.jpg?as=run';

  import PreviewImage from '$lib/PreviewImage.svelte';

  function calculateAge(birthday: string): number {
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  const myAge = calculateAge('1986-01-27');
</script>

<div class="relative mt-12">
  <section class="md:absolute mb-12">
    <div>{myAge} y/o italian photographer</div>
    <div>barcelona based</div>
    <div>
      <a target="_blank" href="mailto:danielemeli86@gmail.com">mail</a>
    </div>
    <div>
      <a target="_blank" href="https://www.instagram.com/danielemeli/">insta</a>
    </div>
  </section>

  <section class="grid grid-cols-5 grid-flow-row gap-3 lg:gap-6 auto-rows-min">
    <div
      class="lg:grid grid-cols-4 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-2 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={tree}
        alt="One tree and a nice yellow"
        title={'null'}
        aspect="1/1"
        loading="eager"
        imageClasses="md:col-start-2 md:col-end-5"
        metaClasses="pt-2 md:row-start-1 md:col-span-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./null"
      />
    </div>
    <div
      class="lg:grid grid-cols-3 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-end-4 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={eleven}
        alt="Goffres et Crêpes"
        title={'humans were here'}
        aspect="3420/2216"
        imageClasses="md:col-start-1 md:col-end-3"
        metaClasses="pt-2 md:col-span-1 md:flex flex-col md:items-start md:justify-end"
        projectUrl="./hwh"
      />
    </div>
    <div
      class="lg:grid grid-cols-2 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-4 mb-12 lg:mb-52 auto-rows-min"
    >
      <PreviewImage
        src={twelve}
        alt="Magazzino Merci"
        title={"Agosto '94"}
        aspect="2000/1610"
        imageClasses="image md:col-start-1 md:col-end-3"
        metaClasses="meta pt-2 md:col-start-1 md:col-end-2 row-start-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./agosto94"
      />
    </div>
    <div
      class="lg:grid grid-cols-4 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-2 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={adrian}
        alt="Adrian"
        title={'libere'}
        aspect="6196/5061"
        imageClasses="md:col-start-2 md:col-end-5"
        metaClasses="pt-2 md:row-start-1 md:col-span-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./libere"
      />
    </div>
    <div
      class="lg:grid grid-cols-2 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-3 md:col-end-5 mb-12 lg:mb-52 auto-rows-min"
    >
      <PreviewImage
        src={thirthyFour}
        alt="Left Blue"
        title={'humans were here'}
        aspect="2195/3319"
        imageClasses="image md:col-start-2 md:col-end-3"
        metaClasses="meta pt-2 md:col-start-1 md:col-end-2 row-start-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./hwh"
      />
    </div>
    <div
      class="lg:grid grid-cols-4 gap-3 lg:gap-6 col-start-1 col-end-6 md:col-start-1 md:col-end-4 mb-12 lg:mb-52"
    >
      <PreviewImage
        src={yellow}
        alt="A yellow box on the beach"
        title={'null'}
        aspect="1/1"
        imageClasses="md:col-start-2 md:col-end-5"
        metaClasses="pt-2 md:row-start-1 md:col-span-1 md:flex flex-col md:items-end md:justify-end"
        projectUrl="./null"
      />
    </div>
  </section>
</div>
