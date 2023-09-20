<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import AudioBkgPausePlayButton 
  from "../../5-elements/audio-bkg/AudioBkgPausePlayButton.svelte";
  import AudioBkgTimer from "./AudioBkgTimer.svelte";
  import { audioBkgTrack } from "../../../dynamic/audioBkg";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="audio-bkg-player">
  <h3>{$audioBkgTrack.name}</h3>
  <AudioBkgPausePlayButton />
  <AudioBkgTimer />
</div>