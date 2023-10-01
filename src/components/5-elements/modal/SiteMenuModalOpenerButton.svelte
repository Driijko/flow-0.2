<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import modalOpen from "../../../scripts/modalOpen";
  import MenuIcon from "../../6-icons/interface/MenuIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-opener-button center" 
  on:click={()=> modalOpen("siteMenu")}
  title="open menu"
>
  <MenuIcon />
</button>

<style>
  button {
    width: 100px;
    height: 100px;
  }
</style>