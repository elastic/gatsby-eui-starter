/**
 * Chrome component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import {
  EuiPopover,
  EuiSpacer,
  EuiAvatar,
  EuiHeader,
  EuiButton,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
} from '@elastic/eui';

import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext('dark');

if (localStorage.getItem('theme') === 'dark') {
  require('../../themes/theme_dark.scss');
} else {
  require('../../themes/theme_light.scss');
}

import HeaderUpdates from './header_updates';

export const Chrome = ({ children }: any) => {
  const initialTheme =
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  const [themeIsLoading, setThemeIsLoading] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSpacesOpen, setIsSpacesOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);
  document.body.classList.add('euiBody--headerIsFixed--double');

  useEffect(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    return () => {
      // Clean up the subscription
      localStorage.setItem('theme', newTheme);
      setThemeIsLoading(true);
      window.location.reload();
    };
  }, [theme]);

  const breadcrumbs = [
    {
      text: 'Management',
      href: '#',
    },
    {
      text: 'Users',
    },
  ];

  const headers = (
    <>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic">Elastic</EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <EuiPopover
                button={
                  <EuiHeaderSectionItemButton
                    aria-label="Account menu"
                    onClick={() => setIsAccountOpen(!isAccountOpen)}>
                    <EuiAvatar name="John Username" size="s" />
                  </EuiHeaderSectionItemButton>
                }
                isOpen={isAccountOpen}
                closePopover={() => setIsAccountOpen(false)}>
                <div>
                  <EuiButton
                    size="s"
                    iconType="invert"
                    onClick={() =>
                      setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                    isLoading={themeIsLoading}>
                    Switch Theme
                  </EuiButton>
                </div>
              </EuiPopover>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <EuiPopover
                button={
                  <EuiHeaderSectionItemButton
                    aria-label="Account menu"
                    onClick={() => setIsSpacesOpen(!isAccountOpen)}>
                    <EuiAvatar type="space" name="Default Space" size="s" />
                  </EuiHeaderSectionItemButton>
                }
                isOpen={isSpacesOpen}
                closePopover={() => setIsSpacesOpen(false)}>
                <div>asdf</div>
              </EuiPopover>,
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
          {
            items: [<HeaderUpdates />],
            borders: 'none',
          },
        ]}
      />
    </>
  );

  return (
    <ThemeContext.Provider value={theme}>
      <EuiSpacer />
      {headers}
      {children}
    </ThemeContext.Provider>
  );
};
