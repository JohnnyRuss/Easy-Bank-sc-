import styled from "styled-components";
import { media } from "../../styles/Media.styled";
import {
  textColor,
  sectionBgTint,
  headingSecondary,
  headingTertiary,
} from "../../styles/Helpers.styles";

export const WhyChooseContainer = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  ${sectionBgTint};

  ${({ theme }) => media.desktop`
    padding:${theme.utils["section-pad-desktop"]};
  `};

  .choice-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    &__title {
      ${headingSecondary}
    }

    &__description {
      max-width: 100%;
      ${textColor};

      ${media.tabletLg`
        max-width:40rem;
      `}
    }

    &__title,
    &__description {
      text-align: center;
    }
  }

  .choice-list {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    ${media.mobileLg`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-top: 6rem;
    `}
  }

  .choice-list--item {
    flex: 1;
    min-width: 20rem;
    max-width: 25rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    ${media.tablet`
      align-items:flex-start;
      min-width:25rem;
    `}

    &__fig {
      width: 5rem;
      aspect-ratio: 1/1;

      img {
        width: 100%;
        object-fit: cover;
        object-position: center;
      }

      ${media.tabletLg`
        width:7rem;
      `}
    }

    &__title {
      ${headingTertiary}
    }

    &__description {
      font-size: ${({ theme }) => theme.fontSize.s};
      ${textColor}
      text-align:center;

      ${media.tablet`
        text-align:start;
      `}
    }
  }
`;
