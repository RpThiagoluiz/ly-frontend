import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: {
        black: string;
        darkGray: string;
        lightGray: string;
        gray: string;
      };
      details: {
        grayPrimary: string;
        graySecondary: string;
        grayTeriary: string;
        grayQuaternary: string;
        white: string;
      };
      text: {
        white: string;
        gray: string;
        black: string;
      };
      buttons: {
        yellow: string;
        red: string;
        green: string;
      };
    };
  }
}
