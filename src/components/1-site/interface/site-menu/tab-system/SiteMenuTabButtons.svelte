<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import CompassIcon from "../../../../6-icons/interface/CompassIcon.svelte";
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
    <SiteMenuTabButton tabName="web-design">
      <PenToSquareIcon />
    </SiteMenuTabButton>
  </li>
</ul>