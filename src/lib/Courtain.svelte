<script lang="ts">
  import { nextPage } from '$lib/store';
  import { fade } from '$lib/customTransition';

  export let duration: number;
  export let curtainAppears: boolean;

  let projects = [
    {
      route: '/',
      title: '.'
    },
    {
      route: '/agosto94',
      title: "Agosto '94"
    },
    {
      route: '/hwh',
      title: 'humans were here'
    },
    {
      route: '/libere',
      title: 'libere'
    },
    {
      route: '/null',
      title: 'null'
    }
  ];
  $: title = '';

  $: if (curtainAppears) {
    title = projects.filter((project) => project.route === $nextPage)[0].title;
  }
</script>

{#if curtainAppears}
  <div
    style={`background-color: #1c1c1c`}
    class={`fixed inset-0 z-50 flex items-center justify-center text-6xl uppercase serif text-white text-center`}
    transition:fade={{ duration }}
  >
    {title}
  </div>
{/if}
