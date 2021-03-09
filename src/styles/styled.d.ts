import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: {
        black: string;
        darkGray: string;
        gray: string;
        lightGray: string;
      };
      details: {
        grayPrimary: string;
        graySecondary: string;
        grayTeriary: string;
        grayQuaternary: string;
      };
      text: {
        white: string;
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
