<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { interfaceModal } from "../../../dynamic/modals";
  import { layout } from "../../../static/siteSettings";
  import Interface from "./Interface.svelte";

  const { toolbarHeightMO } = layout;

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#if $interfaceModal}
  <dialog open class="center" class:vp-layer={$breakpoint === "small-desktop"}
    class:mobile={$breakpoint === "mobile"}
    style:--thm={toolbarHeightMO}
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
dialog.mobile {
  height: calc((100 - var(--thm)) * 1%);
  width: 100%;
}
</style>