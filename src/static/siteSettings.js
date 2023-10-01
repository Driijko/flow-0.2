// AR = aspect-ratio
// MO = mobile
// SD = small-desktop
// LD = large-desktop
export const layout = {
  portraitAR: {width: 9, height: 16},
  landscapeAR: {width: 16, height: 9},
  toolbarHeightMO: 8, // percentage of layer
  toolbarButtonSizeSD: 5, //percentage of layer
  breakpointLD: 2000, // px viewport width
  interfaceAreaWidth: 25, // percentage of viewport width
  interfaceAreaPadding: 0.8, // reverse percentage of content area (0.8 = 20%)
  toolbarHeightLD: 0.1, // percentage of interface container height
  contentAreaPadding: 0.85, //  reverse percentage of content area (0.85 = 15%)
};

export const startingPageName = "splash";