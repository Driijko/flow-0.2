<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { currentPage, exiting } from "../../../dynamic/currentPage";
  import FlippableBackground from "../../5-elements/FlippableBackground.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////// -->
{#if $currentPage === "splash"}
  <div class="fill" class:exiting={$exiting}>
    <FlippableBackground
      src={{
        portrait: "./backgrounds/back1-v.jpg",
        landscape: "./backgrounds/back1-h.jpg"
      }}
    />
  </div>
{/if}