<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { currentPage } from "../../../dynamic/currentPage";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  import OpeningPromptPage from "../../../site-specific/background-audio/components/2-pages/OpeningPromptPage.svelte";
  import AudioBkg from "../../../components-site-specific/background-audio/components/1-site/AudioBkg.svelte";
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