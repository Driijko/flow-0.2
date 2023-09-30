<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./scripts/viewport/setUp";
  import OpeningRouter from "./components/1-site/routers/OpeningRouter.svelte";
  import Breakpoint from "./components/1-site/layout/Breakpoint.svelte";
  import AudioBkg from "./components/1-site/AudioBkg.svelte";
  import { audioBkgTrack, audioBkgPaused, audioBkgVolume, audioBkgLoadPlay, audioBkgUpdateTotalTime, audioBkgPlayAfterLoad, audioBkgLoop, audioBkgCurrentTime, audioBkgCurrentPlaylist, audioBkgCurrentPlaylistIndex, audioBkgNextPlaylistTrack, audioBkgFinishLoading
  } from "./dynamic/audioBkg";
  import Breakpoint2 from "./components/1-site/layout/Breakpoint2.svelte";

  // SET UP -----------------------------------------------
  setUp();

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<Breakpoint />
<!-- <Breakpoint2 /> -->

<!-- STYLES //////////////////////////////////////////// -->
<style>
/* .vp {
  display:
} */
</style>