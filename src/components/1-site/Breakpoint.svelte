<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { layout } from "../../data/staticData";
  import { breakpoint } from "../../data/breakpoint";
  import { interfaceModal, interfaceArea } from "../../data/modals";
  import InterfaceModal from "./interface/InterfaceModal.svelte";

  const {portraitAR, landscapeAR} = layout;

  // SETTINGS --------------------------------------------
  const mobileToolbarHeight = 8; // percentage of layer
  const interfaceAreaWidth = 25; // percentage of viewport width
  const interfaceContainerWidth = 80; // percentage of interface area
  const largeDesktopToolbarWidth = interfaceContainerWidth;
  const contentContainerWidth = 85; // percentage of content area

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<!-- Background ---------- -->
<div class="vp-layer">

</div>

<!-- MOBILE ----------------------------------------- -->
{#if $breakpoint === "mobile"}
  <div class="vp-layer">
    <div class="content-container" inert={$interfaceModal}
      style:height={`${100 - mobileToolbarHeight}%`}
    ></div>
    <div class="toolbar-container" inert={$interfaceModal}
      style:height={`${mobileToolbarHeight}%`}
    ></div>
  </div>

  <InterfaceModal />

<!-- SMALL DESKTOP ------------------------------------ -->
{:else if $breakpoint === "small-desktop"}
  <div class="vp-layer content-container" inert={$interfaceModal}></div>
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
  >
    <div class="interface-area center"
      style:max-width={$interfaceArea ? `${interfaceAreaWidth}%` : "0%"}
    >
      <div class="interface-container"
        style:width={`${interfaceContainerWidth}%`}
        style:aspect-ratio={`${portraitAR.width}/${portraitAR.height}`}
      ></div>
      <div class="toolbar-container"
        style:width={`${largeDesktopToolbarWidth}%`}
        style:height={`${mobileToolbarHeight}%`}
      ></div>
    </div>

    <div class="content-area center">
      <div class="content-container"
        style:width={`${contentContainerWidth}%`}
        style:aspect-ratio={`${landscapeAR.width}/${landscapeAR.height}`}
      >
      
      </div>
    </div>
  </div>
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
  flex: 2;
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