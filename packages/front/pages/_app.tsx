import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@UI/theme';
import GlobaStyle from '@UI/GlobaStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobaStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
