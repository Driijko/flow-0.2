<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "./tab-system/SiteMenuTabs.svelte";
  import SiteMenuTabButtons from "./tab-system/SiteMenuTabButtons.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////////////////////// -->
<div class="site-menu"
  class:portrait={$breakpoint !== "small-desktop"}
  class:landscape={$breakpoint === "small-desktop"}
>
  <header>
    <h1>FLOW</h1>
    <h2>A front-end web developer framework</h2>
  </header>

  <SiteMenuBreadcrumbs />

  <SiteMenuTabs />

  <SiteMenuTabButtons />

</div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div :global(.site-menu-tab-buttons) {
  width: 100%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  color: black;
}
div :global(.site-menu-tab-buttons button) {
  background-color: yellow;
  width: 10vw;
}
</style>