<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import modalOpen from "../../../scripts/modalOpen";
  import SortIcon 
  from "../../6-icons/interface/SortIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={()=> modalOpen("sort")} title="sort products"
  class="center"
>
  <SortIcon />
</button>