<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../data/breakpoint";
  import { layout } from "../../data/staticData";
  import InterfaceModal from "./interface/InterfaceModal.svelte";


  const { mobileToolbarSize } = layout;

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<!-- Background ---------- -->
<div class="vp-layer">

</div>

<!-- MOBILE ----------------------------------------- -->
{#if $breakpoint === "mobile"}
  <div class="vp-layer">
    <div class="content-container"
      style:height={`${100 - mobileToolbarSize}%`}
    ></div>
    <div class="toolbar-container"
      style:height={`${mobileToolbarSize}%`}
    ></div>
  </div>

  <InterfaceModal />

<!-- SMALL DESKTOP ------------------------------------ -->
{:else if $breakpoint === "small-desktop"}
  <p>hi</p>
{:else if $breakpoint === "large-desktop"}
  <p>nope</p>
{/if}

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.content-container {
  background-color: hsla(0, 100%, 50%, 1);
}
.toolbar-container {
  background-color: black;
}
/* PORTRAIT ---------------------------------------- */
@media screen and (orientation: portrait) {

}
</style>