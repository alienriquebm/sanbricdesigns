import theme from '@UI/theme';

type ThemeConfig = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {} // eslint-disable-line @typescript-eslint/no-empty-interface
}
