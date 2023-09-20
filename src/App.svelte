<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./scripts/viewport/setUp";
  import OpeningRouter from "./components/1-site/Routers/OpeningRouter.svelte";
  import Breakpoint from "./components/1-site/Breakpoint.svelte";
  import AudioBkg from "./components/1-site/AudioBkg.svelte";
  import { audioBkgTrack, audioBkgPaused, audioBkgVolume, audioBkgLoadPlay, audioBkgUpdateTotalTime, audioBkgPlayAfterLoad, audioBkgLoop, audioBkgCurrentTime, audioBkgCurrentPlaylist, audioBkgCurrentPlaylistIndex, audioBkgNextPlaylistTrack, audioBkgFinishLoading
  } from "./dynamic/audioBkg";

  // SET UP -----------------------------------------------
  setUp();

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<AudioBkg />
<p>
  {$audioBkgVolume}
</p>

<!-- STYLES //////////////////////////////////////////// -->
<style>
/* .vp {
  display:
} */
</style>