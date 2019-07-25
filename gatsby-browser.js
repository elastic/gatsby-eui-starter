import React from 'react';
import Chrome from './src/components/chrome/chrome';

export const ThemeContext = React.createContext('light');

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContext.Provider value="dark">
      <Chrome>{element}</Chrome>
    </ThemeContext.Provider>
  );
};
