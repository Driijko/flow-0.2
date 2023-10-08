<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import modalOpen from "../../../../../scripts/modalOpen";
  import FilterIcon 
  from "../../../../../components/6-icons/interface/FilterIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={()=> modalOpen("filter")} title="filter products"
  class="center"
>
  <FilterIcon />
</button>