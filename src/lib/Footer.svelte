<script lang="ts">
  import { page } from '$app/stores';
</script>

<footer class="flex flex-col gap-5 md:grid grid-cols-5 mb-14 min-h-[200px]">
  <p class="flex flex-col justify-between">
    <span>
      You've reached the bottom of this page. Feel free to explore my portfolio, return to the
      homepage, or learn a bit more about me.
    </span>

    <span>Copyright Daniele Meli</span>
  </p>

  <div />
  <ul>
    <li>
      <a href="/hwh" class:font-bold={$page.url.pathname === '/hwh'}> Humans were here </a>
    </li>
    <li>
      <a href="/agosto94" class:font-bold={$page.url.pathname === '/agosto94'}> Agosto '94 </a>
    </li>
    <li>
      <a href="/null" class:font-bold={$page.url.pathname === '/null'}> null </a>
    </li>
    <li>
      <a href="/libere" class:font-bold={$page.url.pathname === '/libere'}> libere </a>
    </li>
  </ul>
  <a class:font-bold={$page.url.pathname === '/'} href="/"> homepage </a>
  <a class:font-bold={$page.url.pathname === '/about'} href="/about"> about </a>
</footer>
