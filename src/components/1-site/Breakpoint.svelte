<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../data/breakpoint";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="vp-layer">

</div>
{#if $breakpoint === "mobile"}
  <div class="vp-layer">

  </div>

{:else if $breakpoint === "small-desktop"}
  <p>hi</p>
{:else if $breakpoint === "large-desktop"}
  <p>nope</p>
{/if}

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.vp-layer {
  background-color: hsla(0, 100%, 50%, 0.1);
}
</style>