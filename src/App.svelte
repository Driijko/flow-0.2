<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./scripts/viewport/setUp";
  import OpeningRouter from "./components/1-site/Routers/OpeningRouter.svelte";
  import Breakpoint from "./components/1-site/Breakpoint.svelte";
  import AudioBkg from "./components/1-site/AudioBkg.svelte";

  // SET UP -----------------------------------------------
  setUp();

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<AudioBkg />
<OpeningRouter />
<!-- <Breakpoint /> -->

<!-- STYLES //////////////////////////////////////////// -->
<style>
/* .vp {
  display:
} */
</style>