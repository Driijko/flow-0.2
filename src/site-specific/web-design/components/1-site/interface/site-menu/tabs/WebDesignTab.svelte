<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import { breakpoint } from "../../../../../dynamic/breakpoint";
  import PageLink from "../../../../5-elements/links/PageLink.svelte";
  
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<div class="web-design-tab">
  <div>
    <img alt="Dreeko"
      src={$breakpoint === "small-desktop" ? 
        "./logos/dreeko-logo-medium.png"
        : "./logos/dreeko-logo-small.png"
      }  
    />
  </div>
  <div>
    <p>
      This website was created by Dreeko, a web developer/designer, animator and musician living in Toronto, Canada.
    </p>
    <p>
      To see more of their work, check out their <a href="https://driijko.github.io/dreeko-dev" target="_blank" rel="noopener noreferrer">portfolio site</a>.
    </p>
    <p>
      For more details on the technology and design of this site, 
      <PageLink pageName="web-design">click here</PageLink>.
    </p>
  </div>
</div>

<!-- STYLES //////////////////////////////////////////////////// -->
<style>
.web-design-tab {
  color: white;
}
img {
  width: 100%;
}
</style>