<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { interfaceModal, modals } from "../../../dynamic/modals";
  import { currentPage } from "../../../dynamic/currentPage";

  // ANIMATION --------------------------------------------
  let animation;

  onMount(()=> {

    const animDur = 0.5;

    function menuIcon() {
      gsap.to(".site-menu-modal-button .line1", {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "10", x2: "90", y2: "10" }
      });
      gsap.to([".site-menu-modal-button .line2", ".site-menu-modal-button .line3"], {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "50", x2: "90", y2: "50"}
      });
      gsap.to(".site-menu-modal-button .line4", {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "90", x2: "90", y2: "90"}
      });
    };

    function closeIcon() {
      gsap.to([".site-menu-modal-button .line1",".site-menu-modal-button .line2"], {
        duration: animDur,
        strokeWidth: "15",
        attr: { x1: "20", y1: "20", x2: "80", y2: "80"}
      });
      gsap.to([".site-menu-modal-button .line3",".site-menu-modal-button .line4"], {
        duration: animDur,
        strokeWidth: "15",
        attr: { x1: "20", y1: "80", x2: "80", y2: "20"}
      });
    };

    animation = {
      open: menuIcon,
      close: closeIcon,
    };
  });

  // REACTIVITY -------------------------------------
  $: if (animation) {
    if ($interfaceModal) {
      animation.close();
    } else {
      animation.open();
    }
  };

  // EVENT HANDLERS ------------------------------------

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-button center" 
  on:click={()=>modals.toggle("interfaceModal")}
  class:splash={$currentPage === "splash"}
  class:open={$interfaceModal}
  class:closed={!($interfaceModal)}
  title={$interfaceModal ? "close menu" : "open menu"}
>
  <svg viewBox="0 0 100 100">
    <line class="line1" />
    <line class="line2" />
    <line class="line3" />
    <line class="line4" />
  </svg>
</button>

<!-- STYLES //////////////////////////////////////////// -->
<style>
line {
  stroke-linecap: round;
}
</style>