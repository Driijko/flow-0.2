<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import {siteMenuCurrentTab } from "../../../../dynamic/siteMenuTabs";

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs">
  <li>{$siteMenuCurrentTab}</li>
</ul>


<!-- STYLE ////////////////////////////////////////// -->
<style>
ul {
  display: flex;
  align-items: center;
}
li {
  color: hsl(var(--hue1), 100%, 95%);
}
</style>