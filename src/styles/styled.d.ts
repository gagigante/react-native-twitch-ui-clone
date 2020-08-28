import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      black: string,
      gray: string,
      tag: string,
      tagText: string,
      green: string,
      red: string,
      purple: string,
    };
  }
}