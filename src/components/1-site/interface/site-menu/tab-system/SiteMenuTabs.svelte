<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { siteMenuCurrentTab } from "../../../../../dynamic/siteMenuTabs";
  import SiteMenuTabTransition from "./SiteMenuTabTransition.svelte";
  import NavigationTab from "../tabs/NavigationTab.svelte";
  
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<div class="site-menu-tab-container">
  {#if $siteMenuCurrentTab === "navigation"}
    <SiteMenuTabTransition>
      <NavigationTab />
    </SiteMenuTabTransition>
  {/if}
</div>