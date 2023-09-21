<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { modals, interfaceModal } from "../../../dynamic/modals";
  import { siteMenuCurrentTab, siteMenuNewTab } 
  from "../../../dynamic/siteMenuTabs";
  import ShoppingCartIcon 
  from "../../6-icons/interface/ShoppingCartIcon.svelte";

  // EVENT HANDLERS --------------------------------------
  function handleClick() {
    if ($interfaceModal === false) {
      modals.open("interfaceModal");
    };
    if ($siteMenuCurrentTab !== "shop") {
      siteMenuNewTab("shop");
    };
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={handleClick}>
  <ShoppingCartIcon />
</button>