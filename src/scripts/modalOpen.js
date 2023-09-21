import { get } from "svelte/store";
import { interfaceModal, modals } from "../dynamic/modals";
import { currentInterface, setCurrentInterface } from "../dynamic/currentInterface";
import { siteMenuCurrentTab, siteMenuNewTab } from "../dynamic/siteMenuTabs";

export default function openModal(interfaceName, tab) {
  if (get(interfaceModal) === false) {
    modals.open("interfaceModal");
  };
  if (get(currentInterface) !== interfaceName) {
    setCurrentInterface(interfaceName);
  };
  if (tab && get(siteMenuCurrentTab) !== tab) {
    siteMenuNewTab(tab);
  };
};