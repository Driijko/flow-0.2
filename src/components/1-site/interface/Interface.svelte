<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { currentInterface } from "../../../dynamic/currentInterface";
  import SiteMenu from "./site-menu/SiteMenu.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#if $currentInterface === "siteMenu"}
  <SiteMenu />
{/if}