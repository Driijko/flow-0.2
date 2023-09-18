<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { onMount } from "svelte";
  import calcUARR from "../../scripts/utils/calcUARR";
  import { layout } from "../../data/staticData";
  import { viewportCSSLD } from "../../scripts/viewport/viewportCSS";
  import { interfaceArea, modals } from "../../data/modals";

  const {portraitAR, landscapeAR, toolbarHeightMO, interfaceAreaWidth,
  interfaceAreaPadding, contentAreaPadding, toolbarHeightLD } = layout;

  // AREA RESIZING ----------------------------------------------
  // Element References -----
  let contentAreaElement;
  let interfaceAreaElement;

  // Intialize Responsive Variables ----
  // $: contentContainerAR = {width: 0, height: 0};
  // $: interfaceContainerAR = {width: 0, height: 0};

  // Resize Callback (iterated in the order added) ----
  const resizeObserver = new ResizeObserver(viewportCSSLD);
  // const resizeObserver = new ResizeObserver(entries => {
  //   entries.forEach((entry, index)=> {
  //     if (index === 0) {
  //       contentContainerAR = calcUARR(
  //         entry.contentRect.width * (1 - (contentAreaPadding * 0.01)),
  //         entry.contentRect.height * (1 - (contentAreaPadding * 0.01)),
  //         landscapeAR.width,
  //         landscapeAR.height
  //       );
  //     } else if (index === 1) {
  //       interfaceContainerAR = calcUARR(
  //         entry.contentRect.width * (1 - (interfaceAreaPadding * 0.01)),
  //         entry.contentRect.height * (1 - (interfaceAreaPadding * 0.01)),
  //         portraitAR.width,
  //         portraitAR.height
  //       );
  //     };
  //   });
  // });

  // Observe Elements ----
  onMount(()=> {
    // resizeObserver.observe(contentAreaElement);
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
      style:height={`calc(var(--ih) * ${toolbarHeightLD * 0.01})`}
    ></div>
  </div>

  <!-- CONTENT AREA ----------------------------------------- -->
  <div class="content-area center" bind:this={contentAreaElement}
    style:width={$interfaceArea ? `${100 - interfaceAreaWidth}%`: "100%"}
  >
    <div class="content-container cuarr center">
      <button type="button" on:click={()=> modals.toggle("interfaceArea")}>CLICK ME</button>
    </div>
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