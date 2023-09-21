<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { modals, interfaceModal } from "../../../dynamic/modals";
  import { currentInterface, setCurrentInterface } 
  from "../../../dynamic/currentInterface";
  import FilterIcon 
  from "../../6-icons/interface/FilterIcon.svelte";

  // EVENT HANDLERS --------------------------------------
  function handleClick() {
    if ($interfaceModal === false) {
      modals.open("interfaceModal");
    };
    if ($currentInterface !== "filter") {
      setCurrentInterface("filter");
    };
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={handleClick}>
  <FilterIcon />
</button>