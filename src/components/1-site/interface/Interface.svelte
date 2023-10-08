<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { currentInterface } from "../../../dynamic/currentInterface";
  import SiteMenu from "./site-menu/SiteMenu.svelte";
  import SortInterface from "../../../site-specific/shop/components/1-site/interface/SortInterface.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////////////// -->
{#if $currentInterface === "siteMenu"}
  <SiteMenu />
{:else if $currentInterface === "sort"}
  <SortInterface />
{/if}