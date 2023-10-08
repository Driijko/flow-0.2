<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------
  import SortInterface from "../../../site-specific/shop/components/1-site/interface/SortInterface.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////// -->
{:else if $currentInterface === "sort"}
  <SortInterface />