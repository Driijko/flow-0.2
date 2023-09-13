import { updateBreakpoint } from "../../data/breakpoint";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    updateBreakpoint();
  });
};