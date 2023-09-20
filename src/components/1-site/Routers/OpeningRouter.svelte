<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  import OpeningPromptPage from "../../2-pages/OpeningPromptPage.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
{#if $currentPage === "loading"}
  <LoadingPage />
{:else if $currentPage === "opening-prompt"}
  <OpeningPromptPage />
{/if}