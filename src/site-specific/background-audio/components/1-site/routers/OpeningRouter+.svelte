<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------------
  import OpeningPromptPage from "../../../site-specific/background-audio/components/2-pages/OpeningPromptPage.svelte";
  import AudioBkg from "../../../components-site-specific/background-audio/components/1-site/AudioBkg.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<!-- Place at the top of markup of Opening Router -->
<AudioBkg />

{:else if $currentPage === "opening-prompt"}
  <OpeningPromptPage />