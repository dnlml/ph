<script lang="ts">
  import { courtainDown } from '$lib/customTransition';

  export let duration: number;
  export let curtainAppears: boolean;
</script>

{#if curtainAppears}
  <div
    class="courtainDown bg-red-500 fixed inset-0 z-20 -translate-y-full"
    in:courtainDown={{ duration }}
  />
{/if}
