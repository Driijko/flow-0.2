<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals, interfaceModal } from "../../../dynamic/modals";
  import MenuIcon from "../../6-icons/interface/MenuIcon.svelte";

  // EVENT HANDLERS ---------------------------------------------
  function handleClick() {

  }

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-opener-button" 
  on:click={()=>modals.open("siteMenu")}
  title="open menu"
>
  <MenuIcon />
</button>