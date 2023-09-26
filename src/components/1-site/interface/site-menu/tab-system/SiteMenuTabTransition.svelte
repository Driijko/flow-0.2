<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import { siteMenuGetTabPosition, siteMenuCurrentTab, siteMenuPrevTab } 
  from "../../../../../dynamic/siteMenuTabs";

  // REACTIVE -----------------------------------
  $: currentTabPosition = siteMenuGetTabPosition($siteMenuCurrentTab);
  $: prevTabPosition = siteMenuGetTabPosition($siteMenuPrevTab);

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="site-menu-tab fill"
  in:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      -window.innerWidth : window.innerWidth, 
    duration: 300, 
    delay: 300,
    easing: linear,
  }}"
  out:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      window.innerWidth: -window.innerWidth, 
    duration: 300,
    easing: linear,
  }}"
>
  <slot />
</div>