<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import WebDesignTab from "../tabs/WebDesignTab.svelte";
  
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{:else if $siteMenuCurrentTab === "web-design"}
  <SiteMenuTabTransition>
    <WebDesignTab />
  </SiteMenuTabTransition>
