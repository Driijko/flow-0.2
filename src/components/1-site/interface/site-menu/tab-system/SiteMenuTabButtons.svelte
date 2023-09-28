<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { shoppingList } from "../../../../../dynamic/shoppingList";
  import CompassIcon from "../../../../6-icons/interface/CompassIcon.svelte";
  import ShoppingCartIcon 
  from "../../../../6-icons/interface/ShoppingCartIcon.svelte";
  import MusicIcon from "../../../../6-icons/interface/MusicIcon.svelte";
  import PenToSquareIcon 
  from "../../../../6-icons/interface/PenToSquareIcon.svelte";
  import SiteMenuTabButton from "./SiteMenuTabButton.svelte";
  
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<ul class="site-menu-tab-buttons">
  <li>
    <SiteMenuTabButton tabName="navigation">
      <CompassIcon />
    </SiteMenuTabButton>
  </li>
  <li>
    <SiteMenuTabButton tabName="shopping-cart">
      <ShoppingCartIcon />
      <span class="gap"></span>
      <output>({$shoppingList.length})</output>
    </SiteMenuTabButton>
  </li>
  <li>
    <SiteMenuTabButton tabName="background-audio">
      <MusicIcon />
    </SiteMenuTabButton>
  </li>
  <li>
    <SiteMenuTabButton tabName="web-design">
      <PenToSquareIcon />
    </SiteMenuTabButton>
  </li>
</ul>