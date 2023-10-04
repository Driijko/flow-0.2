<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import SiteMenuModalOpenerButton 
  from "../5-elements/modal/SiteMenuModalOpenerButton.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="center fill">
  <hgroup>
    <h1>FLOW</h1>
    <h2>A front-end web development framework</h2>
  </hgroup>
  <SiteMenuModalOpenerButton />
</div>

<!-- STYLES //////////////////////////////////////////////// -->
<style>
div {
  flex-direction: column;
  gap: 5vh;
}
hgroup {
  background-color: white;
  width: 100%;
  text-align: center;
}
div :global(.site-menu-modal-opener-button) {
  width: 20vw;
  height: 20vw;
  padding: 3vw;
  background-color: white;
}
</style>
