<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { breakpoint } from "../../data/breakpoint";
  import { layout } from "../../data/staticData";
  import InterfaceModal from "./interface/InterfaceModal.svelte";


  const { mobileToolbarHeight } = layout;

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<!-- Background ---------- -->
<div class="vp-layer">

</div>

<!-- MOBILE ----------------------------------------- -->
{#if $breakpoint === "mobile"}
  <div class="vp-layer">
    <div class="content-container"
      style:height={`${100 - mobileToolbarHeight}%`}
    ></div>
    <div class="toolbar-container"
      style:height={`${mobileToolbarHeight}%`}
    ></div>
  </div>

  <InterfaceModal />

<!-- SMALL DESKTOP ------------------------------------ -->
{:else if $breakpoint === "small-desktop"}
  <div class="vp-layer content-container"></div>
  <InterfaceModal />
  <div class="toolbar-container"
    style:position="absolute"
    style:top="0%"
    style:right="0%"
  ></div>

<!-- LARGE DESKTOP ----------------------------------- -->
{:else if $breakpoint === "large-desktop"}
  <div class="vp-layer"
    style:display="flex"
  ></div>
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