<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import BackgroundAudioMenuTab from "../tabs/BackgroundAudioMenuTab.svelte";
  
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{:else if $siteMenuCurrentTab === "background-audio"}
  <SiteMenuTabTransition>
    <BackgroundAudioMenuTab />
  </SiteMenuTabTransition>