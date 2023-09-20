<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals } from "../../../dynamic/modals";
  import MenuIcon from "../../6-icons/interface/MenuIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-opener-button" 
  on:click={()=>modals.open("siteMenu")}
  title="open menu"
>
  <MenuIcon />
</button>