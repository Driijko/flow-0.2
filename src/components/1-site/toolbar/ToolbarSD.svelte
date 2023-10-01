<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { flip } from "svelte/animate";
  import { quintOut, quintIn, sineOut, quintInOut, linear } from "svelte/easing";
  import shift from "../../../scripts/transitions/shift";
  import { layout } from "../../../static/siteSettings";
  import { currentInterface } from "../../../dynamic/currentInterface";
  import { interfaceModal } from "../../../dynamic/modals";

  const { toolbarButtonSizeSD } = layout;
  const toolbarButtonSizeFloat = toolbarButtonSizeSD * 0.01;
  const closerButtonRatio = 1.2;

  // PROPS ---------------------------------------
  export let buttons = [];

  // TRANSITIONS --------------------------------------
  const inTransReg = {
    easing: quintOut, 
    duration: 1000, 
    y: -window.innerHeight * toolbarButtonSizeFloat,
  };
  const outTransReg = {
    easing: quintIn,
    duration: 500,
    y: -window.innerHeight * toolbarButtonSizeFloat,
  }
  const inTransCloser = {
    easing: quintOut, 
    delay: 500,
    duration: 1200, 
    x: window.innerWidth * (toolbarButtonSizeFloat * closerButtonRatio),
  };
  const outTransCloser = {
    easing: quintIn,
    duration: 500,
    x: window.innerWidth * (toolbarButtonSizeFloat * closerButtonRatio),
  }

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<menu class="toolbar" style:gap={`${toolbarButtonSizeSD/4}vw`}>

  {#each buttons as button (button.id)}

    <li class="toolbar-button-container center"
      class:interface-closer-container={button.closer}
      class:highlight={button.highlight === $currentInterface && $interfaceModal}
      animate:flip="{{duration: 700, delay: 300, easing: sineOut}}"
      in:shift="{button.closer ? inTransCloser : inTransReg}" 
      out:shift="{button.closer ? outTransCloser : outTransReg}"
      style:width={button.closer? "10vh" : `${toolbarButtonSizeSD}vw`}
      style:height={button.closer? "10vh" : `${toolbarButtonSizeSD}vw`}
    >
      <svelte:component this={button.component} />
    </li>

  {/each}

</menu>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
menu {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
}
li {
  background-color: black;
}
</style>