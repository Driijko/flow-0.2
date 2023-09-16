<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { onMount } from "svelte";
  import calcUARR from "../../scripts/utils/calcUARR";
  import { layout } from "../../data/staticData";
  import { breakpoint } from "../../data/breakpoint";
  import { interfaceModal, interfaceArea } from "../../data/modals";
  import InterfaceModal from "./interface/InterfaceModal.svelte";
  import LargeDesktop from "./LargeDesktop.svelte";

  const {portraitAR, landscapeAR, toolbarHeightMO, interfaceContainerWidthLD, toolbarWidthLD, contentContainerWidthLD,
  contentContainerHeightLD} = layout;

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<!-- Background ---------- -->
<div class="vp-layer">

</div>

<!-- MOBILE ----------------------------------------- -->
{#if $breakpoint === "mobile"}
  <div class="vp-layer">
    <div class="content-container" inert={$interfaceModal}
      style:height={`${100 - toolbarHeightMO}%`}
    ></div>
    <div class="toolbar-container" inert={$interfaceModal}
      style:height={`${toolbarHeightMO}%`}
    ></div>
  </div>

  <InterfaceModal />

<!-- SMALL DESKTOP ------------------------------------ -->
{:else if $breakpoint === "small-desktop"}
  <div class="vp-layer content-container" inert={$interfaceModal}></div>
  <InterfaceModal />
  <div class="toolbar-container"></div>

<!-- LARGE DESKTOP ----------------------------------- -->
{:else if $breakpoint === "large-desktop"}
  <LargeDesktop />
{/if}


<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.content-container {
  background-color: hsla(0, 100%, 50%, 1);
}
.toolbar-container {
  background-color: black;
}
.interface-container {
  background-color: red;
}
.interface-area {
  flex-direction: column;
  background-color: blue;
  border: 10px solid red;
  /* flex: 2; */
  transition: max-width 0.5s ease-out;
}
.content-area {
  background-color: orange;
  border: 10px solid green;
  flex: 1;
}
/* PORTRAIT ---------------------------------------- */
@media screen and (orientation: portrait) {

}
</style>