<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import { breakpoint } from "../../../../../dynamic/breakpoint";
  import { layout } from "../../../../../static/siteSettings";
  import { siteMenuGetTabPosition, siteMenuCurrentTab, siteMenuPrevTab } 
  from "../../../../../dynamic/siteMenuTabs";

  // DESTRUCTURING ---------------------------------
  const { interfaceAreaWidth } = layout;

  // REACTIVE -----------------------------------
  $: currentTabPosition = siteMenuGetTabPosition($siteMenuCurrentTab);
  $: prevTabPosition = siteMenuGetTabPosition($siteMenuPrevTab);

  let distance = window.innerWidth;
  $: if ($breakpoint === "large-desktop") {
    distance = window.innerWidth * (interfaceAreaWidth * 0.01);
  } else {
    distance = window.innerWidth;
  }

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="site-menu-tab fill"
  in:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      -distance : distance, 
    duration: 300, 
    delay: 300,
    easing: linear,
  }}"
  out:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      distance: -distance, 
    duration: 300,
    easing: linear,
  }}"
>
  <slot />
</div>