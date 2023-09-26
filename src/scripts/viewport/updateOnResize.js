import { resizeDelay } from "../../static/siteSettings";
import { updateBreakpoint } from "../../dynamic/breakpoint";
import { viewportCSS } from "./viewportCSS";

export default function updateOnResize() {
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        updateBreakpoint();
        viewportCSS();
        resizeReady = false;
        clearTimeout(timerId);
      }, resizeDelay);
    }
  });
};