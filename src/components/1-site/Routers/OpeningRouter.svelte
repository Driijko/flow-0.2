<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  import OpeningPromptPage from "../../2-pages/OpeningPromptPage.svelte";
  import AudioBkg from "../AudioBkg.svelte";
  import Breakpoint from "../layout/Breakpoint.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<AudioBkg />
{#if $currentPage === "loading"}
  <LoadingPage />
{:else if $currentPage === "opening-prompt"}
  <OpeningPromptPage />
{:else}
  <Breakpoint />
{/if}