<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { layout } from "../../../static/siteSettings";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { interfaceModal } from "../../../dynamic/modals";
  import Toolbar from "../toolbar/Toolbar.svelte";
  import InterfaceModal from "../interface/InterfaceModal.svelte";
  import LargeDesktop from "./LargeDesktop.svelte";
  import { currentPage } from "../../../dynamic/currentPage";
  import SiteMenuModalOpenerButton from "../../5-elements/modal/SiteMenuModalOpenerButton.svelte";

  // DESTRUCTURING ----------------------------------
  const { toolbarHeightMO } = layout;

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
      style:height={
        $currentPage === "splash" && !($interfaceModal) ? 
        "100dvh" : `${100 - toolbarHeightMO}%`
      }
    >
      <SiteMenuModalOpenerButton />
    </div>
    <div class="toolbar-container"
      style:height={
      $currentPage === "splash" && !($interfaceModal) ? 
      "0" : `${toolbarHeightMO}%`}
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
  <LargeDesktop />
{/if}


<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.content-container {
  background-color: hsla(0, 100%, 50%, 1);
}
</style>