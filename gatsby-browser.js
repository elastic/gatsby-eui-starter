import React from 'react';
import { Chrome } from './src/components/chrome/chrome';

export const wrapRootElement = ({ element }) => {
  return <Chrome>{element}</Chrome>;
};
