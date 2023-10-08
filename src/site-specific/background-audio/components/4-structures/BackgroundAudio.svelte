<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioBkgPaused } from "../../../../components-site-specific/background-audio/dynamic/audioBkg";
  import AudioBkgCheckbox 
  from "../../../../components/5-elements/audio-bkg/AudioBkgCheckbox.svelte";
  import AudioBkgVolumeSlider 
  from "../../../../components/5-elements/audio-bkg/AudioBkgVolumeSlider.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="background-audio">
  <label for="audio-option">
    Background Audio
    <AudioBkgCheckbox />
  </label>
  <label for="volume" class:visible={!($audioBkgPaused)} class="volume-adjust">
    Adjust volume to your preference:
    <AudioBkgVolumeSlider />
  </label>
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  .volume-adjust {
    transform: scaleY(0);
    transition: transform 0.3s ease-out;
  }
  .volume-adjust.visible, .volume-adjust:focus-within {
    transform: scaleY(1);
  }
</style>