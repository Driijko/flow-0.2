<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import { breakpoint } from "../../../dynamic/breakpoint";
  import { layout } from "../../../static/siteSettings";


  // DESTRUCTURING ---------------------------------
  const { interfaceAreaWidth, portraitAR } = layout;

  let distance = window.innerHeight;
  $: if ($breakpoint === "large-desktop") {
    distance = interfaceAreaWidth * (portraitAR.height / portraitAR.width);
  } else {
    distance = window.innerHeight;
  }

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="site-menu-tab fill"
  in:shift="{{
    y: distance, 
    duration: 300, 
    delay: 300,
    easing: linear,
  }}"
  out:shift="{{
    y: distance, 
    duration: 300,
    easing: linear,
  }}"
>
  <slot />
</div>