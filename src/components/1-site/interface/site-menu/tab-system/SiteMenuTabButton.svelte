<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { siteMenuCurrentTab, siteMenuNewTab } 
  from "../../../../../dynamic/siteMenuTabs";
  
  // PROPS -------------------------------------------
  export let tabName = "";

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<button type="button" class="center" inert={$siteMenuCurrentTab === tabName}
  class:highlight={$siteMenuCurrentTab === tabName}
  on:click={()=> siteMenuNewTab("tabName")}
>
  <slot />
</button>