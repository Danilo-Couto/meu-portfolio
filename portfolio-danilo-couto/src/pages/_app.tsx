import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import GlobalStyles from '../styles/global';
import { theme, lightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeMode = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? theme : lightTheme}>
      <NextNprogress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Toaster position="bottom-right" />
      <Component {...pageProps} changeMode={changeMode} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
