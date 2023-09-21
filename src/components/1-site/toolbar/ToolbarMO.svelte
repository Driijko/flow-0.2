<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import { flip } from "svelte/animate";
  import { quintOut, quintIn, sineOut } from "svelte/easing";
  import shift from "../../../scripts/transitions/shift";
  import { layout } from "../../../static/siteSettings";
  import SiteMenuModalOpenerButton 
  from "../../5-elements/modal/SiteMenuModalOpenerButton.svelte";
  import SiteMenuModalToggleButton 
  from "../../5-elements/modal/SiteMenuModalToggleButton.svelte";

  const { toolbarHeightMO } = layout;

  // PROPS -------------------------------------------------
  export let buttons = [];
  export let interfaceModalCloser = false;

  // TRANSITIONS --------------------------------------
  const inTrans = {
    easing: quintOut, 
    duration: 1000, 
    x: -window.innerWidth
  };
  const outTrans = {
    easing: quintIn,
    duration: 500,
    x: -window.innerWidth
  }

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<menu class="center fill toolbar"
  style:gap={`${toolbarHeightMO * 2}px`}
>
  {#each buttons as button (button.id)}

    <li class="toolbar-button-container"
      animate:flip="{{duration: 700, delay: 300, easing: sineOut}}"
      in:shift="{inTrans}" out:shift="{outTrans}"
      style:width={`${toolbarHeightMO}dvh`}
    >
      <svelte:component this={button.component} />
    </li>

  {/each}
</menu>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
menu {
  display: flex;
  flex-flow: reverse;
}
li {
  height: 100%;
}
</style>

