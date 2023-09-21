<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { currentPage } from "../../../dynamic/currentPage";
  import { shoppingList } from "../../../dynamic/shoppingList";
  import SiteMenuModalOpenerButton 
  from "../../5-elements/modal/SiteMenuModalOpenerButton.svelte";
  import SiteMenuModalToggleButton 
  from "../../5-elements/modal/SiteMenuModalToggleButton.svelte";
  import ToolbarMO from "./ToolbarMO.svelte";
  import InstagramLink from "../../5-elements/links/InstagramLink.svelte";
  import ShopModalOpenerButton 
  from "../../5-elements/modal/ShopModalOpenerButton.svelte";
  import SortModalOpenerButton 
  from "../../5-elements/modal/SortModalOpenerButton.svelte";
  import FilterModalOpenerButton 
  from "../../5-elements/modal/FilterModalOpenerButton.svelte";
  import { layout } from "../../../static/siteSettings";

  const { toolbarButtonSizeSD } = layout;

  // INTERFACE ELEMENTS IN LIST ---------------------------------------
  const siteMenuToggleButton = { id: 0, component: SiteMenuModalToggleButton };
  const instagramLink = { id: 1, component: InstagramLink };
  const shopButton = { id: 2, component: ShopModalOpenerButton };
  const sortButton = { id: 3, component: SortModalOpenerButton };
  const filterButton = { id: 4, component: FilterModalOpenerButton };
  const siteMenuOpenButton = { id: 5, component: SiteMenuModalOpenerButton };

  // INTERFACE MODAL CLOSER ---------------------------
  let interfaceModalCloser = false;

  // INTERFACE ARRAY CONFIGURATIONS ---------------------
  const config1 = [instagramLink];
  const config2 = [instagramLink, siteMenuToggleButton];
  const config3 = [instagramLink, shopButton, siteMenuOpenButton];
  const config4 = [sortButton, filterButton, shopButton, siteMenuOpenButton];

  // INTERFACE ARRAY -------------------------------------
  let buttons = [];

  // RESPONSIVE ARRAY CONFIGURATION ----------------------
  $: if ($breakpoint === "large-desktop") {
    if ($currentPage === "shop") {
      buttons = config4;
    } else {
      buttons = config1;
    }
    interfaceModalCloser = false;
  } else {
    if ($currentPage === "shop") {
      buttons = config4;
      interfaceModalCloser = true;
    } else {
      if ($shoppingList.length > 0) {
        buttons = config3;
      } else {
        buttons = config2;
      }
      interfaceModalCloser = false;
    };
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{#if $breakpoint === "mobile"}
  <ToolbarMO {buttons} {interfaceModalCloser} />
{/if}
<!-- <menu class="fill center"
  class:sd={$breakpoint === "small-desktop"}
  style:--tbs={toolbarButtonSizeSD}
>
  <SiteMenuModalOpenerButton />
  <SiteMenuModalToggleButton />
</menu> -->

<!-- STYLES //////////////////////////////////////////////// -->
<style>
:global(.toolbar button), :global(.toolbar a) {
  height: 100%;
  color: white;
  padding: 2.5%;
}
/* menu.sd :global(button) {
  width: calc(var(--tbs) * 1vw);
  height: calc(var(--tbs) * 1vw);
  padding: 1vw;
} */
</style>