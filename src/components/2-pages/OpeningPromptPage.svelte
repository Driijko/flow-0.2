<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import SiteSettings from "../4-structures/SiteSettings.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { setPageExit, newPage } from "../../dynamic/currentPage";
  import { audioBkgLoad, audioBkgLoadPlay, audioBkgPaused } 
  from "../../dynamic/audioBkg";

  // ANIMATION --------------------------------------------------
  function pageEntrance() {
    gsap.from("#page1 path", {
      duration: 10,
      opacity: 0,
      attr: {
        d: "M 50 50 Q 50 50 50 50",
      }
    });
    gsap.from("#page1 .opening-prompt-content", {
      opacity: 0,
      duration: 3,
      delay: 1,
    });
  };

  onMount(()=> {
    pageEntrance();
  });

  function pageExit() {
    gsap.to("#page1 path", {
      duration: 2,
      opacity: 0,
      attr: {
        d: "M 50 50 Q 50 50 50 50",
      }
    });
    gsap.to("#page1 .opening-prompt-content", {
      opacity: 0,
      duration: 2,
    });
  };

  setPageExit(pageExit, 2000);

  // EVENT HANDLERS -----------------------------------
  function handleClick(e) {
    e.preventDefault();
    newPage("splash");
    if ($audioBkgPaused) {
      audioBkgLoad("./audio/background-audio.mp3");
    } else {
      audioBkgLoadPlay("./audio/background-audio.mp3");
    };
  };

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<div id="page1" class="vp">
  <svg class="background" viewBox="0 0 100 100">
    <path d="M 50 -10 Q -200 50 50 110"/>
    <path d="M 50 -10 Q -150 50 50 110"/>
    <path d="M 50 -10 Q -100 50 50 110"/>
    <path d="M 50 -10 Q -50 50 50 110"/>
    <path d="M 50 -10 Q -25 50 50 110"/>
    <path d="M 50 -10 Q 0 50 50 110"/>
    <path d="M 50 -10 Q 25 50 50 110"/>
    <path d="M 50 -10 Q 40 50 50 110"/>
    <path d="M 50 -10 Q 300 50 50 110"/>
    <path d="M 50 -10 Q 250 50 50 110"/>
    <path d="M 50 -10 Q 200 50 50 110"/>
    <path d="M 50 -10 Q 150 50 50 110"/>
    <path d="M 50 -10 Q 125 50 50 110"/>
    <path d="M 50 -10 Q 100 50 50 110"/>
    <path d="M 50 -10 Q 75 50 50 110"/>
    <path d="M 50 -10 Q 60 50 50 110"/>
  </svg>
  <div class="opening-prompt-content">
    <p>Welcome to Blah Blah Blah.</p>
    <p>
      For the fullest experience,<br/> turning on background audio<br/> is recommended.
    </p>
    <SiteSettings />
    <a href="splash-page" on:click={handleClick}>Ready</a>
  </div>
</div>



<!-- STYLES ////////////////////////////////////////// -->
<style>
#page1 {
  display: flex;
  justify-content: center;
}
.background {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: var(--vph);
}
path {
  fill: transparent;
  stroke-width: 70;
  stroke: hsla(0, 100%, 50%, 0.2);
}
.opening-prompt-content {
  font-size: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: calc(100dvh * 0.02);
  background-color: hsla(200, 100%, 10%, 0.7);
  color: hsl(300, 100%, 66%);
  overflow: hidden;
}
@media screen and (min-height: 480px) {
  .opening-prompt-content {
    gap: 38px;
    padding-bottom: calc(var(--vph) * 0.05);
  }
}
p {
  line-height: 1.5;
}
#page1 :global(.site-settings) {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 8px;
}
#page1 :global(.site-settings label:nth-of-type(1)) {
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 400;
  font-size: 20px;
}
#page1 :global(input[type="checkbox"]) {
  border: 3px solid hsl(300, 100%, 66%);
  height: 50px;
  width: 50px;
  border-radius: 7px;
  background-color: hsl(200, 100%, 5%);
}
#page1 :global(.volume-adjust) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 20px;
}
#page1 :global(input[type="range"]) {
  width: 200px;
  height: 50px;
  padding: 15px;
}
#page1 :global(input[type="range"]::-webkit-slider-runnable-track) {
  background-color: hsl(var(--hue2), 100%, 5%);
  border-style: solid;
  border-color: hsl(var(--hue1), 100%, 66%);
  border-width: 3px;
  height: 14px;
  border-radius: 50px;
}
#page1 :global(input[type="range"]::-moz-range-track) { 
  background-color: transparent;
  border-style:solid;
  border-color: hsl(var(--hue1), 100%, 66%);
  border-width: 5px;
  height: 80%;
  border-radius: 50px;
}
#page1 :global(input[type="range"]::-webkit-slider-thumb) {
  background-color: hsl(var(--hue1), 100%, 25%); 
  border-style: solid;
  border-color: hsl(var(--hue1), 100%, 66%);
  border-width: 3px;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  margin-top: -9px; 
}
#page1 :global(input[type="range"]::-moz-range-thumb) {
  background-color: hsl(var(--hue1), 100%, 66%);
  border-style: solid;
  border-color: hsl(var(--hue1), 100%, 66%);
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
a {
  border: 3px solid hsl(var(--hue1), 100%, 66%);
  text-align: center;
  padding: 7px 0 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 120px;
  align-self: center;
  font-weight: 400;
  background-color: hsl(var(--hue1), 100%, 5%);
}
/* TRANSITIONS ---------------------------------- */
#page1 :global(input[type="checkbox"]) {
  transition-property: background-color, border-radius;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}
#page1 :global(input[type="checkbox"]:checked) {
  background-color: hsl(var(--hue1), 100%, 40%);
  border-radius: 30px;
}
@media (hover:hover) {
  a {
    transition-property: transform, border-color, color, outline-width;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    outline-width: 0;
    outline-style: solid;
    outline-color: hsla(var(--hue2), 100%, 3%, 0.8);
  }
  a:hover, a:focus-visible {
    transform: scale(1.3);
    border-color: hsl(var(--hue1), 100%, 85%);
    color: hsl(var(--hue1), 100%, 85%);
    outline-width: var(--vph);
  }
}
</style>