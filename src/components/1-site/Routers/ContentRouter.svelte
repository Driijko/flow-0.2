<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";

</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
{#if $currentPage === "splash"}
  <SplashPage />
{/if}