<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "./SiteMenuTabs.svelte";

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

</div>