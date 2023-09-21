<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { currentPage } from "../../../dynamic/currentPage";
  import { shoppingList } from "../../../dynamic/shoppingList";
  import { interfaceModal } from "../../../dynamic/modals";
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
  import InterfaceModalCloserButton 
  from "../../5-elements/modal/InterfaceModalCloserButton.svelte";


  // INTERFACE ELEMENTS IN LIST ---------------------------------------
  const siteMenuToggleButton = { id: 0, component: SiteMenuModalToggleButton };
  const instagramLink = { id: 1, component: InstagramLink };
  const shopButton = { id: 2, component: ShopModalOpenerButton };
  const sortButton = { 
    id: 3, 
    component: SortModalOpenerButton,
    highlight: "sort",
  };
  const filterButton = { 
    id: 4, 
    component: FilterModalOpenerButton,
    highlight: "filter",
  };
  const siteMenuOpenButton = { 
    id: 5, 
    component: SiteMenuModalOpenerButton,
    highlight: "siteMenu"
  };
  const interfaceCloser = { id: 6, component: InterfaceModalCloserButton };

  // INTERFACE MODAL CLOSER ---------------------------
  let interfaceModalCloser = false;

  // INTERFACE ARRAY CONFIGURATIONS ---------------------
  const config1 = [instagramLink];
  const config2 = [instagramLink, siteMenuToggleButton];
  const config3 = [instagramLink, shopButton, siteMenuOpenButton];
  const config4 = [sortButton, filterButton, shopButton, siteMenuOpenButton];
  const config5 = [
    sortButton, filterButton, shopButton, siteMenuOpenButton, interfaceCloser
  ];

  // INTERFACE ARRAY -------------------------------------
  let buttons = [];

  // RESPONSIVE ARRAY CONFIGURATION ----------------------
  $: if ($breakpoint === "large-desktop") {
    if ($currentPage === "shop") {
      if ($interfaceModal) {
        buttons = config5;
      } else {
        buttons = config4;
      };
    } else {
      buttons = config1;
    }
  } else {
    if ($currentPage === "shop") {
      if ($interfaceModal) {
        buttons = config5;
      } else {
        buttons = config4;
      };
    } else {
      if ($shoppingList.length > 0) {
        buttons = config3;
      } else {
        buttons = config2;
      }
    };
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{#if $breakpoint === "mobile"}
  <ToolbarMO {buttons} />
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
  width: 100%;
  height: 100%;
  color: white;
}
:global(.toolbar .highlight) {
  background-color: hsl(300, 100%, 50%);
}
:global(.toolbar svg) {
  height: 60%;
}
@media (hover: hover) {
  :global(.toolbar svg) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  :global(.toolbar button:hover svg), :global(.toolbar button:focus svg),
  :global(.toolbar a:hover svg), :global(.toolbar a:focus svg) {
    transform: scale(1.25);
  }
}
/* menu.sd :global(button) {
  width: calc(var(--tbs) * 1vw);
  height: calc(var(--tbs) * 1vw);
  padding: 1vw;
} */
</style>