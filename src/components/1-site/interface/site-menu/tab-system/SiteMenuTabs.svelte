<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { siteMenuCurrentTab } from "../../../../../dynamic/siteMenuTabs";
  import SiteMenuTabTransition from "./SiteMenuTabTransition.svelte";
  import Navigation from "../tabs/NavigationTab.svelte";
  import WebDesignTab from "../tabs/WebDesignTab.svelte";
  
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<div class="site-menu-tab-container">
  {#if $siteMenuCurrentTab === "navigation"}
    <SiteMenuTabTransition>
      <Navigation />
    </SiteMenuTabTransition>
  {:else if $siteMenuCurrentTab === "web-design"}
    <SiteMenuTabTransition>
      <WebDesignTab />
    </SiteMenuTabTransition>
  {/if}
</div>