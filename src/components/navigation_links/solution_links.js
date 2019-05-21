import React from 'react';
import { pinExtraAction } from './pin_extra_action';

export const SolutionLinks = [
  {
    label: 'APM',
    href: '/#/layout/nav-drawer',
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Infrastructure',
    href: '/#/layout/nav-drawer',
    iconType: 'infraApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Log viewer',
    href: '/#/layout/nav-drawer',
    iconType: 'loggingApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    href: '/#/layout/nav-drawer',
    iconType: 'upgradeAssistantApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    href: '/#/layout/nav-drawer',
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    href: '/#/layout/nav-drawer',
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
];