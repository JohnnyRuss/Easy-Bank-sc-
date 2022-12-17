import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: Color;
    weight: Weight;
    breakPoint: BreakPoint;
    fontSize: FontSize;
    utils: Utils;
    mode: Mode;
  }

  interface Color {
    "bg-color": "#000000" | "hsl(0, 0%, 100%)";
    "text-color": "hsl(0, 0%, 100%)" | "#000000";
    "black-light": "#262626";
    "app-white": "hsl(0, 0%, 100%)";
    "light-gray": "hsl(0, 0%, 98%)";
    "light-grayish-blue": "hsl(220, 16%, 96%)";
    "grayish-blue": "hsl(233, 8%, 62%)";
    "dark-blue": "hsl(233, 26%, 24%)";
    "lime-green": "hsl(136, 65%, 51%)";
    "bright-cyan": "hsl(192, 70%, 51%)";
  }

  interface Mode {
    isDark: boolean;
  }

  interface Weight {
    thin: 300;
    regullar: 400;
    bold: 700;
  }

  interface BreakPoint {
    container: "1480px";
    desktop: "90em"; // 1440px
    tablet: "60em"; // 960px
    "mobile-large": "42.5em"; // 680px
    mobile: "17.5em"; //  280px
  }

  interface FontSize {
    heading: "3rem";
    "h-2": "2.6rem";
    lg: "2rem";
    base: "1.6rem";
    sm: "1.4rem";
    s: "1.2rem";
  }

  interface Utils {
    "primary-gradient": "linear-gradient(135deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%))";
    "shadow-sm": "0px 0px 6px rgba(0, 0, 0, 0.3)";
    "shadow-sm--white": "0px 0px 6px rgba(200, 200, 200, 0.5)";
    "shadow-lg": "0px 0px 10px 3px rgba(0, 0, 0, 0.3)";
    "shadow-lg--white": "0px 0px 10px 3px rgba(200, 200, 200, 0.3)";
    "shadow-bottom-sm--black": "0px 2px 6px rgba(0, 0, 0, 0.5)";
    "shadow-bottom-sm--white": "0px 2px 6px rgba(200, 200, 200, 0.5)";
    "section-pad-desktop": "8rem 12rem";
    "border-base": "0.75rem";
    "border-sm": "0.5rem";
  }
}
