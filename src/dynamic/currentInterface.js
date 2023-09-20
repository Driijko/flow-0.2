import { writable } from "svelte/store";

// STATE ----------------------------------------
export const currentInterface = writable("siteMenu");

// FUNCTIONS -----------------------------------
export function setCurrentInterface(interfaceName) {
  currentInterface.set(interfaceName);
};