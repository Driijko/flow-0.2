<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { interfaceModal } from "../../../dynamic/modals";
  import Interface from "./Interface.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#if $interfaceModal}
  <dialog open class="vp-layer center"
    transition:shift="{{y:window.innerHeight, duration:1000}}"
  >
    <Interface />
  </dialog>
{/if}

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
dialog {
  border: 4px solid yellow;
}
</style>