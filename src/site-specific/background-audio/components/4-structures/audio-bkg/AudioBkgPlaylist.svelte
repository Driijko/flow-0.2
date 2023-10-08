<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { audioBkgTrack, audioBkgRestart, audioBkgFadeLoadPlay, 
    audioBkgUpdateCurrentPlaylistIndex, audioBkgLoad,
    audioBkgNewPlaylist, audioBkgCurrentPlaylist, audioBkgLoop,
    audioBkgSetLoop, audioBkgLoadPlay
  } from "../../../components-site-specific/background-audio/dynamic/audioBkg";
  import AudioBkgPlayer from "./AudioBkgPlayer.svelte";
  import playlists from "../../../components-site-specific/background-audio/static/playlists";

  // PROPS -----------------------------------------
  export let identifier = "";

  // DESTRUCTURING -----------------------------
  const {tracks, name} = playlists[identifier];

  // LOCAL DATA ---------------------------------------------
  const fadeDuration = 1500;

  // EVENT HANDLERS ------------------------------------
  function handleClick(track, index) {
    if ($audioBkgLoop) {
      audioBkgSetLoop(false);
    };
    
    if ($audioBkgTrack.name === track.name) {
      audioBkgRestart();
    } 
    else {
      audioBkgLoadPlay(track.name, track.path);
      if ($audioBkgCurrentPlaylist.identifier !== identifier) {
        audioBkgNewPlaylist(identifier, tracks);
      }
      audioBkgUpdateCurrentPlaylistIndex(index);
    };
  };

  // REACT ON INITIALIZATION ----------------------------------------
  if ($audioBkgTrack.path === "") {
    audioBkgLoad(tracks[0].name, tracks[0].path);
    audioBkgNewPlaylist(identifier, tracks);
  };

</script>

<!-- MARKUP /////////////////////////////// -->
<section class="audio-bkg-playlist-section">
  <h2>{name}</h2>
  <ul class="audio-bkg-playlist">
    {#each tracks as track, index}
      <li>
        <button type="button" class="playlist-button"
          on:click={()=> handleClick(track, index)}
        >
          {track.name}
        </button>
      </li>
    {/each}
  </ul>
  <AudioBkgPlayer />
</section>