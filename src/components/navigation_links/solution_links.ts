import { pinExtraAction } from './pin_extra_action';

export const SolutionLinks = [
  {
    label: 'APM',
    href: '/#/chrome/nav-drawer',
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Infrastructure',
    href: '/#/chrome/nav-drawer',
    iconType: 'metricsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Log viewer',
    href: '/#/chrome/nav-drawer',
    iconType: 'logsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    href: '/#/chrome/nav-drawer',
    iconType: 'uptimeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    href: '/#/chrome/nav-drawer',
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    href: '/#/chrome/nav-drawer',
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
];
