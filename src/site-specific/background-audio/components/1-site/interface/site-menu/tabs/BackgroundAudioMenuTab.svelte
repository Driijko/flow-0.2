<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  import SiteSettings from "../../../../4-structures/BackgroundAudio.svelte";
  import { breakpoint } from "../../../../../dynamic/breakpoint";

</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div class="fill"
  class:portrait={$breakpoint !== "small-desktop"}
  class:landscape={$breakpoint === "small-desktop"}
>
  <SiteSettings />
</div>

<!-- STYLES //////////////////////////////////////////////// -->
<style>
/* GENERAL ----------------------------------- */
div :global(.background-audio) {
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div :global(.background-audio label) {
  display: flex;
  align-items: center;
}
div :global(.background-audio input[type="checkbox"]) {
  transition-property: border-radius, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
}
div :global(.background-audio input[type="checkbox"]:checked) {
  border-radius: 50% !important;
  background-color: hsl(var(--hue1), 100%, 40%) !important;
}
div :global(input[type="range"]::-webkit-slider-runnable-track) {
  background-color: hsl(var(--hue1), 100%, 60%);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  height: 100%;
  border-radius: 50px;
}
div :global(input[type="range"]::-moz-range-track) { 
  background-color: hsl(var(--hue1), 100%, 60%);
  border-style:solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-width: 5px;
  height: 80%;
}
div :global(input[type="range"]::-webkit-slider-thumb) {
  background-color: hsl(var(--hue1), 100%, 40%);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-radius: 50%;
}
div.portrait :global(input[type="range"]::-moz-range-thumb) {
  background-color: hsl(var(--hue1), 100%, 40%);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-radius: 50%;
}
/* SITE SETTINGS: PORTRAIT ----------------------------- */
div.portrait :global(.background-audio) {
  gap: calc(var(--iw)/5);
}
div.portrait :global(.background-audio label) {
  font-size: calc(var(--iw)/14);
  gap: calc(var(--iw)/10);
  background-color: hsl(var(--hue1), 100%, 70%);
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(var(--ih) * 0.25);
  border-top-width: calc(var(--ih)/100);
  border-bottom-width: calc(var(--ih)/100);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
}
div.portrait :global(.background-audio input[type="checkbox"]) {
  width: calc(var(--iw)/7);
  height: calc(var(--iw)/7);
  border-width: calc(var(--iw)/80);
  border-radius: calc(var(--iw)/100);
  background-color: hsl(var(--hue1), 100%, 60%);
}
div.portrait :global(.background-audio .volume-adjust) {
  flex-direction: column;
  font-size: calc(var(--iw)/16);
}
div.portrait :global(input[type="range"]) {
  width: 75%;
  height: calc(var(--iw)/17);
}
div.portrait :global(input[type="range"]::-webkit-slider-runnable-track) {
  border-width: calc(var(--iw)/100);
}
div.portrait :global(input[type="range"]::-moz-range-track) { 
  border-radius: 50px;
}
div.portrait :global(input[type="range"]::-webkit-slider-thumb) {
  border-width: calc(var(--iw)/60);
  width: calc(var(--iw)/10);
  height: calc(var(--iw)/10);
  margin-top: calc(var(--iw)/-31); 
}
div.portrait :global(input[type="range"]::-moz-range-thumb) {
  border-width: 5px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
/* SITE SETTINGS: LANDSCAPE -------------------- */
div.landscape :global(.background-audio) {
  gap: calc(var(--iw)/10);
  background-image: linear-gradient(
    90deg,
    hsl(var(--hue2), 100%, 70%),
    hsl(var(--hue1), 100%, 70%)
  );
}
div.landscape :global(.background-audio label) {
  font-size: calc(var(--iw)/50);
  gap: calc(var(--iw)/50);
}
div.landscape :global(.background-audio .volume-adjust) {
  gap: calc(var(--iw)/30);
}
div.landscape :global(.background-audio input[type="checkbox"]) {
  width: calc(var(--iw)/30);
  height: calc(var(--iw)/30);
  border-width: calc(var(--iw)/300);
  border-radius: calc(var(--iw)/200);
}
div.landscape :global(input[type="range"]) {
  width: calc(var(--iw)/4);
  height: calc(var(--iw)/75);
}
div.landscape :global(input[type="range"]::-webkit-slider-runnable-track) {
  border-width: calc(var(--iw)/300);
  height: 100%;
}
div.landscape :global(input[type="range"]::-moz-range-track) { 
  border-width: 5px;
  height: 80%;
}
div.landscape :global(input[type="range"]::-webkit-slider-thumb) {
  border-width: calc(var(--iw)/250);
  width: calc(var(--iw)/35);
  height: calc(var(--iw)/35);
  margin-top: calc(var(--iw)/-90); 
}
div.landscape :global(input[type="range"]::-moz-range-thumb) {
  border-width: 5px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
</style>