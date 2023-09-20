<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { breakpoint } from "../../../dynamic/breakpoint";
  import SiteMenuModalOpenerButton 
  from "../../5-elements/modal/SiteMenuModalOpenerButton.svelte";
  import SiteMenuModalToggleButton 
  from "../../5-elements/modal/SiteMenuModalToggleButton.svelte";
  import ToolbarMO from "./ToolbarMO.svelte";
  import { layout } from "../../../static/siteSettings";

  const { toolbarButtonSizeSD } = layout;

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{#if $breakpoint === "mobile"}
  <ToolbarMO />
{/if}
<!-- <menu class="fill center"
  class:sd={$breakpoint === "small-desktop"}
  style:--tbs={toolbarButtonSizeSD}
>
  <SiteMenuModalOpenerButton />
  <SiteMenuModalToggleButton />
</menu> -->

<!-- STYLES //////////////////////////////////////////////// -->
<style>
menu :global(button) {
  height: 100%;
  color: white;
  padding: 2.5%;
}
menu.sd :global(button) {
  width: calc(var(--tbs) * 1vw);
  height: calc(var(--tbs) * 1vw);
  padding: 1vw;
}
</style>