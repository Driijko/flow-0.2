<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import { audioBkgTogglePausePlay, audioBkgPaused } 
  from "../../../../data/audioBkgStore";
  
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<input id="audio-option" type="checkbox" class="audio-bkg-checkbox" 
  on:click={audioBkgTogglePausePlay} checked={!($audioBkgPaused)} 
/>