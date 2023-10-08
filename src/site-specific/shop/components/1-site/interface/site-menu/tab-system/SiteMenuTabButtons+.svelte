<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { shoppingList } from "../../../../../site-specific/shop/dynamic/shoppingList";
  import ShoppingCartIcon 
  from "../../../../6-icons/interface/ShoppingCartIcon.svelte";
  
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<li>
  <SiteMenuTabButton tabName="shopping-cart">
    <ShoppingCartIcon />
    <span class="gap"></span>
    <output>({$shoppingList.length})</output>
  </SiteMenuTabButton>
</li>