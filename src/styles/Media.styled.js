import { css } from "styled-components";

export const media = {
  mobile: (...rules) => css`
    @media (min-width: 17.5em) {
      //280px
      ${css(...rules)}
    }
  `,

  mobileLg: (...rules) => css`
    @media (min-width: 31.25em) {
      //500px
      ${css(...rules)}
    }
  `,

  tablet: (...rules) => css`
    @media (min-width: 42.5em) {
      //680px
      ${css(...rules)}
    }
  `,

  tabletLg: (...rules) => css`
    @media (min-width: 60em) {
      //960px
      ${css(...rules)}
    }
  `,

  desktop: (...rules) => css`
    @media (min-width: 75em) {
      //1200px
      ${css(...rules)}
    }
  `,
};
