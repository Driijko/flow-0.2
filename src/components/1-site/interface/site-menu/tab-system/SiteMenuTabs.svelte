<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { siteMenuCurrentTab } from "../../../../../dynamic/siteMenuTabs";
  import SiteMenuTabTransition from "./SiteMenuTabTransition.svelte";
  import Navigation from "../tabs/Navigation.svelte";
  import BackgroundAudioMenuTab from "../tabs/BackgroundAudioMenuTab.svelte";
  
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<div class="site-menu-tab-container">
  {#if $siteMenuCurrentTab === "navigation"}
    <SiteMenuTabTransition>
      <Navigation />
    </SiteMenuTabTransition>
  {:else if $siteMenuCurrentTab === "background-audio"}
    <SiteMenuTabTransition>
      <BackgroundAudioMenuTab />
    </SiteMenuTabTransition>
  {/if}
</div>