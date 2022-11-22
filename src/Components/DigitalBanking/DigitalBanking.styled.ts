import styled from "styled-components";
import { textColor, headingPrimary } from "../../styles/Helpers.styles";
import { media } from "../../styles/Media.styled";

export const DigitalContainer = styled.section`
  height: 170vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  ${media.mobileLg`
    height: 145vw;
  `};

  ${media.tablet`
    padding-left: 3rem;
    height: 45vw;
    flex-direction:row;
  `};

  ${({ theme }) => media.desktop`
    padding:${theme.utils["section-pad-desktop"]};
  `};

  .digital-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 1rem;

    ${(theme) => media.tablet`
      padding:theme.utils["section-pad-desktop"];
      max-width: 50%;
      align-items: flex-start;
    `};

    &__title {
      ${headingPrimary};
    }

    &__description {
      ${textColor}
    }

    &__title,
    &__description {
      text-align: center;

      ${media.tablet`
        text-align:start;
      `}
    }
  }

  .digital-fig {
    position: relative;
    background: url("/assets/bg-intro-mobile.svg");
    background-size: 100%;
    background-repeat: no-repeat !important;
    overflow: hidden;

    ${media.tablet`
      background: url("/assets/bg-intro-desktop.svg");
      background-size: 140%;
      background-position: 3rem -7rem;
    `};

    ${media.desktop`
       background-size:140%;
       background-position:10rem -7rem;
    `};

    &::after {
      content: "";
      position: absolute;
      z-index: 9;
      top: -36%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 120%;
      background: url("/assets/image-mockups.png");
      background-size: 100%;
      background-repeat: no-repeat;

      ${media.mobileLg`
        height:200%;
        top:-30%;
      `};

      ${media.tablet`
        height:100%;
        top: 0;
        left: 0;
        transform:translateX(0);
        background-position: 15rem -8rem;
        background-size: 90%;
      `}

      ${media.desktop`
        background-size:80%;
        background-position:20rem -10rem;
      `}
    }
  }

  .digital-details {
    flex: 2;
  }

  .digital-fig {
    flex: 4;
  }

  .digital-details,
  .digital-fig {
    ${media.tablet`
      flex:1;
    `}
  }
`;
