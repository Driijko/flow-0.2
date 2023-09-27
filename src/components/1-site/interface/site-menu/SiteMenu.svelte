<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { breakpoint } from "../../../../dynamic/breakpoint";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "./tab-system/SiteMenuTabs.svelte";
  import SiteMenuTabButtons from "./tab-system/SiteMenuTabButtons.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////////////////////// -->
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

<!-- STYLES //////////////////////////////////////////// -->
<style>
/* GENERAL ----------------------------------------------- */
header {
  height: 10%;
  padding: 0% 0% 1% 1%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
div :global(.site-menu-breadcrumbs) {
  background-color: grey;
  color: white;
  padding: 0% 0% 1% 1%;
  display: flex;
  align-items: center;
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
div :global(.site-menu-tab-buttons button.highlight) {
  background-color: red;
}

/* PORTRAIT ------------------------------------------------- */
.site-menu.portrait header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--ih)/100);
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
}
</style>