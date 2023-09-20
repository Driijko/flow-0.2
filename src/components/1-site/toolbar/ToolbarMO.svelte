<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import SiteMenuModalOpenerButton 
  from "../../5-elements/modal/SiteMenuModalOpenerButton.svelte";
  import { layout } from "../../../static/siteSettings";
  import { flip } from "svelte/animate";
  import { send, receive } from "../../../scripts/transitions/animShift";
  import SiteMenuModalToggleButton 
  from "../../5-elements/modal/SiteMenuModalToggleButton.svelte";
  import shift from "../../../scripts/transitions/shift";
  import { quintOut, quintIn, sineOut } from "svelte/easing";

  const {toolbarHeightMO} = layout;

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

  // BUTTON ARRAY -------------------------------------
  let buttons = [
    { id: 0, component: SiteMenuModalToggleButton},
    { id: 1, component: SiteMenuModalOpenerButton}
  ];

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<menu class="center fill"
  style:gap={`${toolbarHeightMO * 2}px`}
>
  {#each buttons as button (button.id)}
    <li class="toolbar-button-container"
      animate:flip="{{duration: 700, delay: 300, easing: sineOut}}"
      in:shift="{inTrans}" out:shift="{outTrans}"
      style:width={`${toolbarHeightMO}dvh`}
      style:padding={`${toolbarHeightMO/5}dvh`}
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
li :global(button) {
  color: white;
  width: 100%;
}
</style>

