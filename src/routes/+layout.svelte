<script>
  import '../app.css';

  const library = [
    {
      name: 'HWM',
      numberOfPhotos: 37,
      link: '/hmw'
    },
    {
      name: "Agosto '94",
      numberOfPhotos: 12,
      link: '/agosto94'
    },
    {
      name: 'null',
      numberOfPhotos: 12,
      link: '/null'
    }
  ];
</script>

<main class="grid grid-col-1-7">
  <aside class="p-5 h-screen sticky top-0">
    <div class="flex flex-col justify-between h-full">
      <div>
        <h1 class="mb-12 text-xl">Daniele Meli</h1>
        <ul class="text-sm">
          {#each library as project}
            <li class="relative group">
              <span
                class="h-[1px] absolute inset-0 bg-black top-1/2 z-0 hidden group-hover:block"
              />
              <a class="flex justify-between items-center relative z-10" href={project.link}>
                <span class="bg-white pr-2">{project.name}</span>
                <span class="bg-white pl-2 text-xs">[{project.numberOfPhotos}]</span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <a class="text-sm" href="/about">about</a>
    </div>
  </aside>
  <slot />
</main>

<style>
  .grid-col-1-7 {
    grid-template-columns: minmax(160px, 1fr) 7fr;
  }
</style>
