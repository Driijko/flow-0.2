<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { fly } from "svelte/transition";
  import { crossfade } from "svelte/transition";
  import { linear } from "svelte/easing";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { layout } from "../../../static/siteSettings";


  // DESTRUCTURING ---------------------------------
  const { interfaceAreaWidth, portraitAR } = layout;

  let distance = window.innerHeight;
  // $: if ($breakpoint === "large-desktop") {
  //   distance = interfaceAreaWidth;
  // } else {
  //   distance = window.innerHeight;
  // }

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="interface-transition fill"
  in:fly="{{
    y: -distance, 
    duration: 500, 
    delay: 500,
    easing: linear,
  }}"
  out:shift="{{
    y: distance, 
    duration: 500,
    easing: linear,
  }}"
>
  <slot />
</div>

<!-- STYLES //////////////////////////////// -->
<style>
div {
  background-color: white;
}
</style>