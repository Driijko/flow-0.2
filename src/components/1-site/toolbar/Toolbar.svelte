<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { currentPage } from "../../../dynamic/currentPage";
  import { interfaceModal } from "../../../dynamic/modals";
  import SiteMenuModalOpenerButton 
  from "../../5-elements/modal/SiteMenuModalOpenerButton.svelte";
  import SiteMenuModalToggleButton 
  from "../../5-elements/modal/SiteMenuModalToggleButton.svelte";
  import ToolbarMOLD from "./ToolbarMOLD.svelte";
  import ToolbarSD from "./ToolbarSD.svelte";
  import InstagramLink from "../../5-elements/links/InstagramLink.svelte";
  import InterfaceModalCloserButton 
  from "../../5-elements/modal/InterfaceModalCloserButton.svelte";


  // INTERFACE ELEMENTS ---------------------------------------
  const siteMenuToggleButton = { id: 0, component: SiteMenuModalToggleButton };
  const instagramLink = { id: 1, component: InstagramLink };
  const siteMenuOpenButton = { 
    id: 5, 
    component: SiteMenuModalOpenerButton,
    highlight: "siteMenu"
  };
  const interfaceCloser = { 
    id: 6, 
    component: InterfaceModalCloserButton,
    closer: true 
  };

  // INTERFACE ARRAY CONFIGURATIONS ---------------------
  const config0 = [];
  const config1 = [ interfaceCloser ];
  const config2 = [instagramLink];
  const config3 = [instagramLink, siteMenuToggleButton];
  const config4 = [instagramLink, shopButton, siteMenuOpenButton];
  const config5 = [sortButton, filterButton, shopButton, siteMenuOpenButton];
  const config6 = [
    sortButton, filterButton, shopButton, siteMenuOpenButton, interfaceCloser
  ];

  // INTERFACE ARRAY -------------------------------------
  let buttons = [];

  // RESPONSIVE ARRAY CONFIGURATION ----------------------
  $: if ($breakpoint === "large-desktop") {
    if ($currentPage === "shop") {
      buttons = config5;
    } else {
      buttons = config2;
    }
  } else if ($currentPage === "splash") {
    if ($interfaceModal) {
      buttons = config1;
    } else {
      buttons = config0;
    }
  } else {
    if ($currentPage === "shop") {
      if ($interfaceModal) {
        buttons = config6;
      } else {
        buttons = config5;
      };
    } else {
      if ($shoppingList.length > 0) {
        buttons = config4;
      } else {
        buttons = config3;
      }
    };
  };

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{#if $breakpoint !== "small-desktop"}
  <ToolbarMOLD {buttons} />
{:else if $breakpoint === "small-desktop"}
  <ToolbarSD {buttons}  />
{/if}


<!-- STYLES //////////////////////////////////////////////// -->
<style>
:global(.toolbar button), :global(.toolbar a) {
  width: 100%;
  height: 100%;
  color: white;
}
:global(.toolbar .highlight) {
  background-color: hsl(0, 0%, 30%);
  color: black;
}
:global(.toolbar svg) {
  height: 55%;
  width: 50%;
}
@media (hover: hover) {
  :global(.toolbar svg) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  :global(.toolbar li:not(.highlight) button:hover svg), 
  :global(.toolbar li:not(.highlight) button:focus-visible svg),
  :global(.toolbar li:not(.highlight) a:hover svg), 
  :global(.toolbar li:not(.highlight) a:focus-visible svg) {
    transform: scale(1.25);
  }
}
</style>