<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { layout } from "../../../static/siteSettings";
  import { interfaceArea, modals } from "../../../dynamic/modals";
  import InterfaceAreaButton from "./InterfaceAreaButton.svelte";
  import Toolbar from "../toolbar/Toolbar.svelte";
  import Interface from "../interface/Interface.svelte";
  import ContentRouter from "../routers/ContentRouter.svelte";

  // DESTRUCTURING ------------------------------------
  const { interfaceAreaWidth, toolbarHeightLD } = layout;

  // OPEN INTERFACE AREA BY DEFAULT ---------------------------
  modals.open("interfaceArea");

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div class="vp-layer"
  style:display="flex"
>
  <!-- INTERFACE AREA ------------------------------------- -->
  <InterfaceAreaButton />
  <div class="interface-area center"
    style:width={$interfaceArea ? `${interfaceAreaWidth}%` : "0%"}
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
    style:width={$interfaceArea ? `${100 - interfaceAreaWidth}%`: "100%"}
  >
    <div class="content-container cuarr">
      <ContentRouter />
    </div>
  </div>
</div>

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
.content-container {
  background-color: red;
  transition-property: width, height;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}
.toolbar-container {
  background-color: black;
}
.interface-container {
  background-color: red;
  overflow: hidden;
}
.interface-area {
  flex-direction: column;
  background-color: hsla(0, 100%, 80%, 0.7);
  transition: width 0.5s ease-out;
  overflow: hidden;
}
.content-area {
  background-color: orange;
  transition: width 0.5s ease-out;
}
</style>