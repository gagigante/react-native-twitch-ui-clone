import React from 'react';

import { ColorThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <ColorThemeProvider>{children}</ColorThemeProvider>
);

export default AppProvider;