<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { onMount } from "svelte";
  import { layout } from "../../static/siteSettings";
  import { viewportCSSLD } from "../../scripts/viewport/viewportCSS";
  import { interfaceArea } from "../../dynamic/modals";
  import InterfaceAreaButton from "../5-elements/modal/InterfaceAreaButton.svelte";

  const { interfaceAreaWidth, toolbarHeightLD } = layout;

  // AREA RESIZING ----------------------------------------------
  // Element Reference -----
  let interfaceAreaElement;

  // Resize Callback  ----
  const resizeObserver = new ResizeObserver(viewportCSSLD);

  // Observe Element ----
  onMount(()=> {
    resizeObserver.observe(interfaceAreaElement);
  });

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div class="vp-layer"
  style:display="flex"
>
  <!-- INTERFACE AREA ------------------------------------- -->
  <InterfaceAreaButton />
  <div class="interface-area center" bind:this={interfaceAreaElement}
    style:width={$interfaceArea ? `${interfaceAreaWidth}%` : "0%"}
    style:flex-shrink="0"
  >
    <div class="interface-container iuarr"></div>
    <div class="toolbar-container"
      style:width="var(--iw)"
      style:height={`calc(var(--ih) * ${toolbarHeightLD})`}
    ></div>
  </div>

  <!-- CONTENT AREA ----------------------------------------- -->
  <div class="content-area center"
    style:width={$interfaceArea ? `${100 - interfaceAreaWidth}%`: "100%"}
  >
    <div class="content-container cuarr"></div>
  </div>
</div>

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
:global(.interface-area-button) {
  position: fixed;
  top: 0;
  width: 40px;
  height: 100dvh;
  background-color: hsla(0, 100%, 0%, 0.8);
  color: white;
  z-index: 1;
  padding-right: 0.4%;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
:global(.interface-area-button.open) {
  background-color: transparent;
  color: black;
}
:global(.interface-area-button svg) {
  width: 80%;
}
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
}
.content-area {
  background-color: orange;
  transition: width 0.5s ease-out;
}
</style>