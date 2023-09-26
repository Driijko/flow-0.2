<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { newPage, currentPage } from "../../../dynamic/currentPage";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { modals, interfaceModal } from "../../../dynamic/modals";

  // PROPS -------------------------------------------
  export let pageName = "";

  // EVENT HANDLER ------------------------------------
  function handleClick() {
    if (!($currentPage === pageName)) {
      newPage(pageName);
      if ($breakpoint !== "large-desktop" && $interfaceModal) {
        modals.close("interfaceModal");
      }
    }
  }
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<a href={pageName} on:click|preventDefault={handleClick}>
  <slot />
</a>