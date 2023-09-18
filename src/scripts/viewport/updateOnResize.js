import { updateBreakpoint } from "../../data/breakpoint";
import { viewportCSS } from "./viewportCSS";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    updateBreakpoint();
    viewportCSS();
  });
};