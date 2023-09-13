import { layout } from "./staticData";
import { writable } from "svelte/store";

const { landscapeBreakpoint } = layout;

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    if (window.innerWidth >= landscapeBreakpoint) {
      return "large-desktop";
    } else {
      return "small-desktop";
    };
  };
};

export const breakpoint = writable(determineBreakpoint());

export function updateBreakpoint() {
  breakpoint.set(determineBreakpoint());
};