<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import modalOpen from "../../../scripts/modalOpen";
  import SortIcon 
  from "../../6-icons/interface/SortIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={()=> modalOpen("sort")}>
  <SortIcon />
</button>