<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { onMount } from "svelte";
  import { audioBkgPath, audioBkgPaused, audioBkgVolume, audioBkgPlayAfterLoad } 
  from "../../data/audioBkg";

  // ELEMENT REFERENCE ----------------------------------
  let audioBkgElement;

  // EVENT HANDLERS -------------------------------------
  function handleLoadedData(e) {
    if ($audioBkgPlayAfterLoad) {
      e.target.play();
    };
  };

  // EVENT LISTENERS ---------------------------------
  onMount(()=> {
    audioBkgElement.addEventListener("loadeddata", handleLoadedData);

    return ()=> {
      audioBkgElement.removeEventListener("loadeddata", handleLoadedData);
    };
  });

  // REACTIVE -------------------------------------------
  $: if (audioBkgElement) {
    audioBkgElement.volume = $audioBkgVolume;
  };

</script>

<audio bind:this={audioBkgElement} src={$audioBkgPath}
  bind:paused={$audioBkgPaused} loop
></audio>