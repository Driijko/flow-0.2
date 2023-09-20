<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { layout } from "../../../static/siteSettings";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { interfaceModal } from "../../../dynamic/modals";
  import Toolbar from "../toolbar/Toolbar.svelte";
  import InterfaceModal from "../interface/InterfaceModal.svelte";
  import LargeDesktop from "./LargeDesktop.svelte";

  const { toolbarHeightMO } = layout;

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
    >
      <Toolbar />
    </div>
  </div>

  <InterfaceModal />

<!-- SMALL DESKTOP ------------------------------------ -->
{:else if $breakpoint === "small-desktop"}
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
</style>