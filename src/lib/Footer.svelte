<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="text-center mb-8 mt-40 lg:mt-0 lg:mb-64 relative z-20">
  You've reached the bottom of this page. Feel free to explore
  <span class="relative">
    <span>my portfolio</span>
    <ul class="hidden lg:block absolute top-20 left-0 text-left w-max">
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
  </span>, return to the
  <span class="relative">
    <span>homepage</span>
    <a
      class="hidden lg:block absolute top-20 left-0 text-left w-max"
      class:font-bold={$page.url.pathname === '/'}
      href="/"
    >
      homepage
    </a>
  </span>, or learn a bit more
  <span class="relative">
    <span>about</span>
    <a
      class="hidden lg:block absolute top-20 left-0 text-left w-max"
      class:font-bold={$page.url.pathname === '/about'}
      href="/about">about</a
    >
  </span>
  me.
</div>

<div class="lg:hidden text-center">
  <ul class="mb-12">
    <li>
      <a
        class="block leading-10 lg:leading-4"
        href="/hwh"
        class:font-bold={$page.url.pathname === '/hwh'}
      >
        Humans were here
      </a>
    </li>
    <li>
      <a
        class="block leading-10 lg:leading-4"
        href="/agosto94"
        class:font-bold={$page.url.pathname === '/agosto94'}
      >
        Agosto '94
      </a>
    </li>
    <li>
      <a
        class="block leading-10 lg:leading-4"
        href="/null"
        class:font-bold={$page.url.pathname === '/null'}
      >
        null
      </a>
    </li>
    <li>
      <a
        class="block leading-10 lg:leading-4"
        href="/libere"
        class:font-bold={$page.url.pathname === '/libere'}
      >
        libere
      </a>
    </li>
  </ul>

  <a class="block mb-12" href="/" class:font-bold={$page.url.pathname === '/'}>homepage</a>
  <a class="block mb-12" href="/about" class:font-bold={$page.url.pathname === '/about'}>about</a>
</div>
