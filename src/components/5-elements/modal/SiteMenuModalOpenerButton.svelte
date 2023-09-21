<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import modalOpen from "../../../scripts/modalOpen";
  import MenuIcon from "../../6-icons/interface/MenuIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-opener-button" 
  on:click={()=> modalOpen("siteMenu")}
  title="open menu"
>
  <MenuIcon />
</button>