import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const interfaceModal = writable(false);

// MAP ------------------------------------
const map = {
  interfaceModal: interfaceModal,
};

// FUNCTIONS ---------------------------------
export const modals = {
  open(modal) {map[modal].set(true)},
  close(modal) {map[modal].set(false)},
  toggle(modal) {map[modal].set(!(get(map[modal])))},
};