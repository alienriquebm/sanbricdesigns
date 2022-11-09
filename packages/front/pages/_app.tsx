import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@UI/theme';
import GlobaStyle from '@UI/GlobaStyle';
import { ContextProvider } from 'hooks/useContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobaStyle />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}
