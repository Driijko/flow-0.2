<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./scripts/viewport/setUp";
  import OpeningRouter from "./components/1-site/Routers/OpeningRouter.svelte";
  import Breakpoint from "./components/1-site/Breakpoint.svelte";

  // SET UP -----------------------------------------------
  setUp();

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<!-- <div class="vp center">
  <div class="cuarr"
    style:border="10px solid black"
  ></div>
</div> -->
<!-- <OpeningRouter /> -->
<Breakpoint />

<!-- STYLES //////////////////////////////////////////// -->
<style>
/* .vp {
  display:
} */
</style>