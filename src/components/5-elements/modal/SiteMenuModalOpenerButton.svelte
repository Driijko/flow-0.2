<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals, interfaceModal } from "../../../dynamic/modals";
  import { currentInterface, setCurrentInterface } from "../../../dynamic/currentInterface";
  import MenuIcon from "../../6-icons/interface/MenuIcon.svelte";

  // EVENT HANDLERS ---------------------------------------------
  function handleClick() {
    if ($interfaceModal === false) {
      modals.open("interfaceModal")
    };
    if ($currentInterface !== "siteMenu") {
      setCurrentInterface("siteMenu");
    };
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-opener-button" 
  on:click={handleClick}
  title="open menu"
>
  <MenuIcon />
</button>