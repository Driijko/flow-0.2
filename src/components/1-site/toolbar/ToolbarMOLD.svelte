<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import { flip } from "svelte/animate";
  import { quintOut, quintIn, sineOut } from "svelte/easing";
  import shift from "../../../scripts/transitions/shift";
  import { layout } from "../../../static/siteSettings";
  import { interfaceModal } from "../../../dynamic/modals";
  import { currentInterface } from "../../../dynamic/currentInterface";
  import { currentPage } from "../../../dynamic/currentPage";
  
  const { toolbarHeightMO } = layout;

  // PROPS -------------------------------------------------
  export let buttons = [];

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
        class:interface-closer-container={button.closer}
        class:highlight={button.highlight === $currentInterface && $interfaceModal}
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
  height: 100%;
  background-color: black;  
}
li {
  height: 100%;
}
.interface-closer-container {
  background-color: hsl(0, 0%, 80%);
}
.interface-closer-container :global(button) {
  color: black;
}
</style>

