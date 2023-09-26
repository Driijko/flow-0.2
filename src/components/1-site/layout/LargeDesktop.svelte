<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { onMount } from "svelte";
  import { layout } from "../../../static/siteSettings";
  import { viewportCSSLD } from "../../../scripts/viewport/viewportCSS";
  import { interfaceModal, modals } from "../../../dynamic/modals";
  import InterfaceAreaButton from "./InterfaceAreaButton.svelte";
  import Toolbar from "../toolbar/Toolbar.svelte";

  const { interfaceAreaWidth, toolbarHeightLD } = layout;

  // AREA RESIZING ----------------------------------------------
  // Element Reference -----
  let interfaceAreaElement;

  // Resize Callback  ----
  const resizeObserver = new ResizeObserver(viewportCSSLD);

  // Observe Element ----
  onMount(()=> {
    resizeObserver.observe(interfaceAreaElement);

    // If viewport is resized to small-desktop or mobile, we
    // close the interface modal.
    return ()=> {
      modals.close("interfaceModal");
    };
  });

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div class="vp-layer"
  style:display="flex"
>
  <!-- INTERFACE AREA ------------------------------------- -->
  <InterfaceAreaButton />
  <div class="interface-area center" bind:this={interfaceAreaElement}
    style:width={$interfaceModal ? `${interfaceAreaWidth}%` : "0%"}
    style:flex-shrink="0"
  >
    <div class="interface-container iuarr"></div>
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
  >
    <div class="content-container cuarr"></div>
  </div>
</div>

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.content-container {
  background-color: hsla(0, 100%, 50%, 1);
  transition-property: width, height;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}
.toolbar-container {
  background-color: black;
}
.interface-container {
  background-color: red;
}
.interface-area {
  flex-direction: column;
  background-color: pink;
  transition: width 0.5s ease-out;
  overflow: hidden;
}
.content-area {
  background-color: orange;
  transition: width 0.5s ease-out;
}
</style>