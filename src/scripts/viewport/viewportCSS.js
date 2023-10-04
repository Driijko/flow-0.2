import { get } from "svelte/store";
import { interfaceArea } from "../../dynamic/modals";
import { layout } from "../../static/siteSettings";
import calcUARR from "../utils/calcUARR";

const {portraitAR, landscapeAR, toolbarHeightMO, breakpointLD, 
interfaceAreaPadding, interfaceAreaWidth, contentAreaPadding } = layout;

// We export the large desktop function seperately so it can be triggered
// by resizing of the content area div.
export function viewportCSSLD() {

  const interfaceAreaWidthDecimal = interfaceAreaWidth * 0.01;

  // Interface -----
  const portraitUARRInterface = calcUARR(
    (window.innerWidth * interfaceAreaWidthDecimal) * interfaceAreaPadding, 
    window.innerHeight * interfaceAreaPadding,
    portraitAR.width, portraitAR.height
  );
  document.documentElement.style.setProperty(
    "--iw", `${portraitUARRInterface.width}px`
  );
  document.documentElement.style.setProperty(
    "--ih", `${portraitUARRInterface.height}px`
  );

  // Content -----
  const landscapeUARRContent = calcUARR(
    get(interfaceArea) ? 
      window.innerWidth * (1 - interfaceAreaWidthDecimal)* contentAreaPadding
      : window.innerWidth * contentAreaPadding,
    window.innerHeight * contentAreaPadding,
    landscapeAR.width, landscapeAR.height
  );
  document.documentElement.style.setProperty(
    "--cw", `${landscapeUARRContent.width}px`
  );
  document.documentElement.style.setProperty(
    "--ch", `${landscapeUARRContent.height}px`
  );
}

export function viewportCSS() {

  // MOBILE MODE ----------------------------------
  if (window.innerWidth <= window.innerHeight) {

    // UARRs -----
    const portraitUARRContent = calcUARR(
      window.innerWidth, window.innerHeight * (1 - (toolbarHeightMO * 0.01)),
      portraitAR.width, portraitAR.height
    );

    const portraitUARRInterface = calcUARR(
      window.innerWidth, window.innerHeight,
      portraitAR.width, portraitAR.height
    );

    // CSS Properties ----
    document.documentElement.style.setProperty(
      "--cw", `${portraitUARRContent.width}px`
    );
    document.documentElement.style.setProperty(
      "--ch", `${portraitUARRContent.height}px`
    );
    document.documentElement.style.setProperty(
      "--iw", `${portraitUARRInterface.width}px`
    );
    document.documentElement.style.setProperty(
      "--ih", `${portraitUARRInterface.height}px`
    );
  }
  // SMALL DESKTOP --------------------------------------
  else if (window.innerWidth < breakpointLD) {

    // UARR ----
    const landscapeUARR = calcUARR(
      window.innerWidth, window.innerHeight,
      landscapeAR.width, landscapeAR.height
    );

    // CSS Properties ----
    document.documentElement.style.setProperty(
      "--cw", `${landscapeUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ch", `${landscapeUARR.height}px`
    );
    document.documentElement.style.setProperty(
      "--iw", `${landscapeUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ih", `${landscapeUARR.height}px`
    );
  }
  // LARGE DESKTOP -------------------------------------
  else {
    viewportCSSLD();
  }
};