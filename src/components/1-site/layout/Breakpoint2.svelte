<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { layout } from "../../../static/siteSettings";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { interfaceModal, modals } from "../../../dynamic/modals";
  import Toolbar from "../toolbar/Toolbar.svelte";
  import InterfaceModal from "../interface/InterfaceModal.svelte";
  import Interface from "../interface/Interface.svelte";
  import InterfaceAreaButton from "./InterfaceAreaButton.svelte";

  // DESTRUCTURING ----------------------------------
  const { toolbarHeightMO, interfaceAreaWidth, toolbarHeightLD } = layout;

  // 
  // This code fixes a bug caused by rapid viewport resizing.
  $: localBreakpoint = $breakpoint;

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<!-- Background ---------- -->
<div class="vp-layer">

</div>

<!-- MOBILE ----------------------------------------- -->
{#if localBreakpoint === "mobile"}

  <div class="vp-layer">
    <div class="content-container" inert={$interfaceModal}
      style:height={`${100 - toolbarHeightMO}%`}
    ></div>
    <div class="toolbar-container"
      style:height={`${toolbarHeightMO}%`}
    >
      <Toolbar />
    </div>
  </div>

  <InterfaceModal />

<!-- SMALL DESKTOP ------------------------------------ -->
{:else if localBreakpoint === "small-desktop"}

  <div class="vp-layer content-container" inert={$interfaceModal}></div>
  <InterfaceModal />
  <div class="toolbar-container"
    style:position="absolute"
    style:top="0"
    style:right="0"
  >
    <Toolbar />
  </div>

<!-- LARGE DESKTOP ----------------------------------- -->
{:else if localBreakpoint === "large-desktop"}

<div class="vp-layer" style:display="flex">

  <!-- INTERFACE AREA ------------------------------------- -->
  <InterfaceAreaButton />
  <div class="interface-area center"
    style:width={$interfaceModal ? `${interfaceAreaWidth}%` : "0%"}
    style:flex-shrink="0"
  >
    <div class="interface-container iuarr">
      <Interface />
    </div>
    <div class="toolbar-container"
      style:width="var(--iw)"
      style:height={`calc(var(--ih) * ${toolbarHeightLD})`}
    >
      <Toolbar />
    </div>
  </div>

  <!-- CONTENT AREA ----------------------------------------- -->
  <div class="content-area center"
    style:width={$interfaceModal ? `${100 - interfaceAreaWidth}%`: "100%"}
    style:transition="width ease-out 0.5s"
  >
    <div class="content-container cuarr"
      style:transition-property="width, height"
      style:transition-timing-function="ease-out"
      style:transition-duration="0.5s"
    ></div>
  </div>
</div>
{/if}


<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.content-container {
  background-color: hsla(0, 100%, 50%, 1);
}
.interface-area {
  flex-direction: column;
  overflow: hidden;
  transition: width 0.5s ease-out;
}
.content-area-ld
</style>