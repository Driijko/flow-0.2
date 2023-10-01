<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { currentInterface } from "../../../dynamic/currentInterface";
  import SiteMenu from "./site-menu/SiteMenu.svelte";
  import SortInterface from "./SortInterface.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#if $currentInterface === "siteMenu"}
  <SiteMenu />
{:else if $currentInterface === "sort"}
  <SortInterface />
{/if}