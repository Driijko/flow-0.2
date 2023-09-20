import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const interfaceModal = writable(false);
// export const interfaceArea = writable(true);

// MAP ------------------------------------
const map = {
  interfaceModal: interfaceModal,
  // interfaceArea: interfaceArea,
};

// FUNCTIONS ---------------------------------
export const modals = {
  open(modal) {map[modal].set(true)},
  close(modal) {map[modal].set(false)},
  toggle(modal) {map[modal].set(!(get(map[modal])))},
};