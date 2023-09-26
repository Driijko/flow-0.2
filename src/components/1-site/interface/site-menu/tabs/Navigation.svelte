<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { breakpoint } from "../../../../../dynamic/breakpoint";
  import PageLink from "../../../../5-elements/links/PageLink.svelte";
  import { currentPage } from "../../../../../dynamic/currentPage";

</script>

<!-- MARKUP /////////////////////////////////// -->
<ul class:small-desktop={$breakpoint === "small-desktop"}
  class:portrait={$breakpoint !== "small-desktop"}
>
  <div class="background"></div>
  <li class:current={$currentPage === "introduction"}>
    <PageLink pageName="introduction">Introduction</PageLink>
  </li>
  <li class:current={$currentPage === "shop"}>
    <PageLink pageName="shop">Shop</PageLink>
  </li>
  <li class:current={$currentPage === "about"}>
    <PageLink pageName="about">About</PageLink>
  </li>
  <li class:current={$currentPage === "contact"}>
    <PageLink pageName="contact">Contact</PageLink>
  </li>
</ul>

<!-- STYLES //////////////////////////////////// -->
<style>
ul {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-image: url("./images/pic5.jpg"); */
  background-size: cover;
  background-position: 50% 50%;
  left: 0;
  z-index: 1;
  opacity: 0.5;
}
ul.portrait {
  align-items: center;
  gap: calc(var(--iw)/5);
}
ul.small-desktop {
  padding-left: calc(var(--iw)/100);
  gap: calc(var(--iw)/15);
}
ul.portrait :global(a) {
  font-size: calc(var(--iw)/13);
}
ul.small-desktop li {
  width: fit-content;
}
ul.small-desktop :global(a) {
  font-size: calc(var(--iw)/50);
}
li {
  z-index: 2;
}
li.current :global(a) {
  transform: scale(1.5);
  text-decoration: underline;
}
/* TRANSITIONS //////////////////////////////////////// */
@media (hover:hover) {
  ul.small-desktop :global(a) {
    transform-origin: 0% 50%;
  }
  ul :global(a) {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    display: block;
  }
  ul :global(a:hover), ul :global(a:focus-visible) {
    transform: scale(1.5);
    text-decoration: underline;
  }
}
</style>