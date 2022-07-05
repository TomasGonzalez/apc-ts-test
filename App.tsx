import React from 'react';
import { ThemeProvider } from 'styled-components';

import MainSafeAreaView from './components/main-safe-area-view';
import SelectionScreen from './screens/selection-screen';
import Navigation from 'navigation';

import theme from 'theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainSafeAreaView>
        <Navigation />
      </MainSafeAreaView>
    </ThemeProvider>
  );
}
