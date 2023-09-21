<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { modals, interfaceModal } from "../../../dynamic/modals";
  import { currentInterface, setCurrentInterface } 
  from "../../../dynamic/currentInterface";
  import SortIcon 
  from "../../6-icons/interface/SortIcon.svelte";

  // EVENT HANDLERS --------------------------------------
  function handleClick() {
    if ($interfaceModal === false) {
      modals.open("interfaceModal");
    };
    if ($currentInterface !== "sort") {
      setCurrentInterface("sort");
    };
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={handleClick}>
  <SortIcon />
</button>