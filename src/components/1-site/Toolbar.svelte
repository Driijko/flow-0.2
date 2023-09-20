<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import SiteMenuModalOpenerButton 
  from "../5-elements/modal/SiteMenuModalOpenerButton.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<menu class="fill center">
  <SiteMenuModalOpenerButton />
</menu>

<!-- STYLES //////////////////////////////////////////////// -->
<style>
menu :global(button) {
  height: 100%;
  color: white;
  padding: 2.5%;
}
</style>