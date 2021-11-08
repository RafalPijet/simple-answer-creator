import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import '../styles/globals.css';
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement !== null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </CacheProvider>
  );
};

export default MyApp;
