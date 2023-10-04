<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import SplashPage from "../../2-pages/SplashPage.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
{#if $currentPage === "splash"}
  <SplashPage />
{/if}