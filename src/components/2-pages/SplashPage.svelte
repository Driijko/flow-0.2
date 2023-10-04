<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";
  import SiteMenuModalOpenerButton 
  from "../5-elements/modal/SiteMenuModalOpenerButton.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="center fill">
  <hgroup>
    <h1>FLOW</h1>
    <h2>A front-end web development framework</h2>
  </hgroup>
  {#if $breakpoint !== "large-desktop"}
    <SiteMenuModalOpenerButton />
  {/if}
</div>

<!-- STYLES //////////////////////////////////////////////// -->
<style>
div {
  flex-direction: column;
  gap: calc(var(--ch)/20);
}
hgroup {
  background-color: white;
  width: 100%;
  text-align: center;
  font-size: calc(var(--cw)/20);
}
div :global(.site-menu-modal-opener-button) {
  width: calc(var(--cw)/10);
  height: calc(var(--cw)/10);
  padding: calc(var(--cw)/100);
  background-color: white;
}
</style>
