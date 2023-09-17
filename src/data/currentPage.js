import { writable } from "svelte/store";
import { startingPageName } from "./staticData";

// STATE ----------------------------------------
export const currentPage = writable(startingPageName);
export const exiting = writable(false);
const currentPageExit = {
  exitMethod: ()=> null,
  duration: 0,
};

// FUNCTIONS -----------------------------------
export function newPage(pageName) {
  currentPageExit.exitMethod();
  exiting.set(true);
  const timerId = setTimeout(()=> {
    currentPage.set(pageName);
    exiting.set(false);
    clearTimeout(timerId);
  },currentPageExit.duration);
};

export function setPageExit(exitMethod, duration) {
  currentPageExit.exitMethod = exitMethod;
  currentPageExit.duration = duration;
};