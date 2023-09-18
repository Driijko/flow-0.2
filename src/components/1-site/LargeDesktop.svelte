<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { onMount } from "svelte";
  import { layout } from "../../data/staticData";
  import { viewportCSSLD } from "../../scripts/viewport/viewportCSS";
  import { interfaceArea } from "../../data/modals";

  const {interfaceAreaWidth,toolbarHeightLD } = layout;

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
    background-color: blue;
    border: 10px solid red;
    transition: width 0.5s ease-out;
  }
  .content-area {
    background-color: orange;
    border: 10px solid green;
    transition: width 0.5s ease-out;
  }
  </style>