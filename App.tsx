import { ThemeProvider } from 'styled-components';

import MainSafeAreaView from './components/MainSafeAreaView';
import Dashboard from './screens/dashboard';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainSafeAreaView>
        <Dashboard />
      </MainSafeAreaView>
    </ThemeProvider>
  );
}
