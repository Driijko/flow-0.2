import { writable, get } from "svelte/store";

// STATE ----------------------------------
export const audioBkgPaused = writable(true);
export const audioBkgVolume = writable(0);
export const audioBkgPath = writable("./audio/opening-prompt.mp3");
export const audioBkgPlayAfterLoad = writable(false);

// FUNCTIONS ------------------------------------
export function audioBkgAdjustVolume(volume) {
  audioBkgVolume.set(volume);
};

export function audioBkgTogglePausePlay() {
  audioBkgPaused.set(!(get(audioBkgPaused)));
};

export function audioBkgLoad(path) {
  audioBkgPath.set(path);
};

export function audioBkgLoadPlay(path) {
  audioBkgPath.set(path);
  audioBkgPlayAfterLoad.set(true);
};