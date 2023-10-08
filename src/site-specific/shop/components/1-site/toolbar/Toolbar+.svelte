<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import ShopModalOpenerButton 
  from "../../5-elements/modal/ShopModalOpenerButton.svelte";
  import SortModalOpenerButton 
  from "../../5-elements/modal/SortModalOpenerButton.svelte";
  import FilterModalOpenerButton 
  from "../../5-elements/modal/FilterModalOpenerButton.svelte";

  // INTERFACE ELEMENTS ---------------------------------------
  const shopButton = { id: "!!!!!!!", component: ShopModalOpenerButton };
  const sortButton = { 
    id: "!!!!!!!!!", 
    component: SortModalOpenerButton,
    highlight: "sort",
  };
  const filterButton = { 
    id: "!!!!!!!!!!", 
    component: FilterModalOpenerButton,
    highlight: "filter",
  };

</script>