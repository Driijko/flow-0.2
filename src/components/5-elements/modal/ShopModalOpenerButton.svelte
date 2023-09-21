<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import modalOpen from "../../../scripts/modalOpen";
  import ShoppingCartIcon 
  from "../../6-icons/interface/ShoppingCartIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={()=> modalOpen("siteMenu", "shop")}
  title="go to shopping cart"
>
  <ShoppingCartIcon />
</button>