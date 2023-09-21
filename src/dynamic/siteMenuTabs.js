import { writable, get } from "svelte/store";

// STATE ------------------------------------------
export const siteMenuCurrentTab = writable("navigation");
export const siteMenuPrevTab = writable("");

// MAP -------------------------------------------
const tabPositionMap = {
  "navigation": 0,
  "shopping-cart": 1,
  "background-audio": 2,
  "web-design": 3
}

// FUNCTIONS --------------------------------------
export function siteMenuNewTab(tabName) {
  siteMenuPrevTab.set(get(siteMenuCurrentTab));
  siteMenuCurrentTab.set(tabName);
};

export function siteMenuGetTabPosition(tabName) {
  return tabPositionMap[tabName];
};