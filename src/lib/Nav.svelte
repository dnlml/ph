<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="nav h-16 md:h-28 fixed top-0 right-0 left-0 z-30 px-3 md:px-6 pointer-events-none">
  <div class="flex justify-between items-center h-full">
    <h1 class="text-xl">
      <a class="pointer-events-auto" href="/">Daniele Meli</a>
    </h1>
    <a class="pointer-events-auto" href="/about" class:font-bold={$page.url.pathname === '/about'}
      >about</a
    >
  </div>
</nav>
