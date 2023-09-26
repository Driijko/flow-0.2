<!-- SCRIPTS /////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { interfaceModal, modals } from "../../../dynamic/modals";
  import RightArrow from "../../6-icons/arrows/RightArrow.svelte";
  import { breakpoint } from "../../../dynamic/breakpoint";

  // ANIMATION -------------------------------------
  let animation;

  onMount(()=> {
    animation = (state,duration) => {
      gsap.set(".interface-area-button svg", {transformOrigin: "65% 50%"});
      if (state === "close") {
        gsap.to(".interface-area-button svg", {
          duration: duration,
          rotate: 0,
        });
      } else {
        gsap.to(".interface-area-button svg", {
          duration: duration,
          rotate: 180,
        });
      };
    };
  });

  // REACTIVE -------------------------------
  $: if (animation) {
    if ($interfaceModal) {
      animation("open", 0.5);
    } else {
      animation("close", 0.5);
    }
  };

  // This code fixes a bug caused by rapid viewport resizing.
  let noDisplay = false;
  $: if ($breakpoint === "large-desktop") {
    noDisplay = false;
  } else {
    noDisplay = true;
  };

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<button class="interface-area-button" type="button"
  class:open={$interfaceModal}
  class:no-display={noDisplay}
  on:click={()=> modals.toggle("interfaceModal")}
>
  <RightArrow />
</button>


<!-- STYLES //////////////////////////////////////// -->
<style>
.interface-area-button {
  position: fixed;
  top: 0;
  width: 40px;
  height: 100dvh;
  background-color: hsla(0, 100%, 0%, 0.8);
  color: white;
  z-index: 1;
  padding-right: 0.4%;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
.interface-area-button.no-display {
  display: none;
}
.interface-area-button.open {
  background-color: transparent;
  color: black;
}
.interface-area-button :global(svg) {
  width: 80%;
}
</style>