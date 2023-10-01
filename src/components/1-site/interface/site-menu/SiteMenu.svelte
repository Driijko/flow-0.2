<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "./tab-system/SiteMenuTabs.svelte";
  import SiteMenuTabButtons from "./tab-system/SiteMenuTabButtons.svelte";
  import InterfaceTransition from "../InterfaceTransition.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////////////////////// -->
<InterfaceTransition>
  <div class="site-menu fill"
    class:portrait={$breakpoint !== "small-desktop"}
    class:landscape={$breakpoint === "small-desktop"}
  >
    <header>
      <h1>FLOW</h1>
      <h2>A front-end web developer framework</h2>
    </header>

    <SiteMenuBreadcrumbs />

    <SiteMenuTabs />

    <SiteMenuTabButtons />

  </div>
</InterfaceTransition>

<!-- STYLES //////////////////////////////////////////// -->
<style>
/* GENERAL ----------------------------------------------- */
header {
  height: 10%;
  padding-left: 1%;
  background-color: black;
  color: white;
  display: flex;
}
div :global(.site-menu-breadcrumbs) {
  background-color: grey;
  color: white;
  padding-left: 1%;
  display: flex;
  align-items: center;
}
div :global(.site-menu-tab-container) {
  overflow: hidden;
}
div :global(.site-menu-tab) {
  background-color: black;
  border-color: grey;
  border-style: solid;
}
div :global(.site-menu-tab-buttons) {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  color: black;
}
div :global(.site-menu-tab-buttons li) {
  height: 100%;
}
div :global(.site-menu-tab-buttons button) {
  height: 90%;
  width: 100%;
  border-radius: 0 0 50% 50%;
  background-color: grey;
}
div :global(.site-menu-tab-buttons li .gap) {
  width: 5%;
}
div :global(.site-menu-tab-buttons button.highlight) {
  background-color: red;
}

/* PORTRAIT ------------------------------------------------- */
.site-menu.portrait header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--ih)/100);
  padding-bottom: 1%;
}
.site-menu.portrait h1 {
  font-size: calc(var(--iw)/18);
}
.site-menu.portrait h2 {
  font-size: calc(var(--iw)/25);
}
.site-menu.portrait :global(.site-menu-breadcrumbs) {
  height: 3.6%;
  font-size: calc(var(--iw)/19.3);
  padding-top: calc(var(--iw)/150);
  padding-bottom: 1%;
}
.site-menu.portrait :global(.site-menu-tab) {
  border-width: calc(var(--iw)/70);
}
.site-menu.portrait :global(.site-menu-tab-container) {
  height: 75%;
}
.site-menu.portrait :global(.site-menu-tab-buttons) {
  height: 11.4%;
}
.site-menu.portrait :global(.site-menu-tab-buttons li) {
  width: 20%;
}
.site-menu.portrait :global(.site-menu-tab-buttons button) {
  height: 70%;
  max-height: 60px;
  padding-bottom: 5%;
}
.site-menu.portrait :global(.site-menu-tab-buttons button svg) {
  width: 35%;
  max-width: 60px;
  height: 80%;
  max-height: 60px;
}

/* SMALL DESKTOP / LANDSCAPE ------------------------------------------ */
.site-menu.landscape header {
  align-items: center;
  gap: calc(var(--iw)/50);
  /* height: calc(var(--ih) * 0.107); */
  height: 10%;
}
.site-menu.landscape h1 {
  font-size: calc(var(--iw)/30);
}
.site-menu.landscape h2 {
  font-size: calc(var(--iw)/60);
}
.site-menu.landscape :global(.site-menu-breadcrumbs) {
  display: flex;
  align-items: center;
  height: 4.5%;
  font-size: calc(var(--iw)/50);
  letter-spacing: calc(var(--iw)/1000);
  padding-left: calc(var(--iw)/80);
  padding-top: calc(var(--iw)/1000);
}
.site-menu.landscape :global(.site-menu-tab) {
  border-width: calc(var(--iw)/150);
}
.site-menu.landscape :global(.site-menu-tab-container) {
  height: 74.5%;
}
.site-menu.landscape :global(.site-menu-tab-buttons) {
  height: 11%;
}
.site-menu.landscape :global(.site-menu-tab-buttons li) {
  width: 15%;
}
.site-menu.landscape :global(.site-menu-tab-buttons button) {
  height: 80%;
  padding-bottom: 1%;
}
.site-menu.landscape :global(.site-menu-tab-buttons button svg) {
  height: 60%;
}
.site-menu.landscape :global(.shop-tab-button) {
  font-size: calc(var(--iw)/50);
  gap: calc(var(--iw)/100);
}
.site-menu.landscape :global(.site-menu-tab-buttons .shop-tab-button svg) {
  width: 20%;
}

</style>