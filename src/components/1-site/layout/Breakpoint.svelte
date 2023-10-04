<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import { layout } from "../../../static/siteSettings";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { interfaceModal } from "../../../dynamic/modals";
  import { currentPage } from "../../../dynamic/currentPage";
  import Toolbar from "../toolbar/Toolbar.svelte";
  import InterfaceModal from "../interface/InterfaceModal.svelte";
  import LargeDesktop from "./LargeDesktop.svelte";
  import BackgroundRouter from "../routers/BackgroundRouter.svelte";
  import ContentRouter from "../routers/ContentRouter.svelte";

  // DESTRUCTURING ----------------------------------
  const { toolbarHeightMO } = layout;

  // This code fixes a bug caused by rapid viewport resizing.
  $: localBreakpoint = $breakpoint;

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<!-- Background ---------- -->
<div class="vp-layer">
  <BackgroundRouter />
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
      <ContentRouter />
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
  <div class="vp-layer content-container" inert={$interfaceModal}>
    <ContentRouter />
  </div>
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