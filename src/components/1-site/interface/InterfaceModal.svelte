<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { interfaceModal } from "../../../dynamic/modals";

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#if $interfaceModal}
  <dialog open class="vp-layer center"
    transition:shift="{{y:window.innerHeight, duration:1000}}"
  >
    <slot />
  </dialog>
{/if}

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
dialog {
  border: 4px solid yellow;
}
</style>