<script lang="ts">
  import { customTransitionIn, customTransitionOut } from '$lib/customTransition';
  import { showingTitle } from '$lib/store';
</script>

{#if $showingTitle !== ''}
  <div
    class="fixed inset-0 hidden md:flex items-center justify-center text-6xl uppercase z-40 pointer-events-none serif"
  >
    <div class="overflow-hidden px-3">
      <div
        class="translate-y-full my-9"
        in:customTransitionIn={{ duration: 900 }}
        out:customTransitionOut={{ duration: 400 }}
      >
        {$showingTitle}
      </div>
    </div>
  </div>
{/if}
