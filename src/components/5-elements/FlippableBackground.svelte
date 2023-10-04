<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------
  import { breakpoint } from "../../dynamic/breakpoint";

  // PROPS -------------------------------------------------
  export let src = {
    portrait: "",
    landscape: "",
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="fill" style="
  background-image: url({
    $breakpoint === "mobile" ? src.portrait : src.landscape
  })"
></div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div {
  background-size: 150% 150%;
  background-position: 0% 0%;
  animation: backgroundShift 30s linear infinite;
}
</style>