import { pinExtraAction } from "./pin_extra_action"

export const ExploreLinks = [
  {
    label: "Canvas",
    href: "/#/layout/nav-drawer",
    iconType: "canvasApp",
    isActive: true,
    extraAction: {
      ...pinExtraAction,
      alwaysShow: true,
    },
  },
  {
    label: "Discover",
    href: "/#/layout/nav-drawer",
    iconType: "discoverApp",
    extraAction: pinExtraAction,
  },
  {
    label: "Visualize",
    href: "/#/layout/nav-drawer",
    iconType: "visualizeApp",
    extraAction: pinExtraAction,
  },
  {
    label: "Dashboard",
    href: "/#/layout/nav-drawer",
    iconType: "dashboardApp",
    extraAction: pinExtraAction,
  },
  {
    label: "Machine learning",
    href: "/#/layout/nav-drawer",
    iconType: "machineLearningApp",
    extraAction: pinExtraAction,
  },
  {
    label: "Custom Plugin (no icon)",
    href: "/#/layout/nav-drawer",
    extraAction: pinExtraAction,
  },
]
