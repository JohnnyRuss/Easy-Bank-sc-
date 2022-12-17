import styled from "styled-components";
import { media } from "../../styles/Media.styled";
import {
  headingSecondary,
  headingTertiary,
  sectionBgTint,
  shadowSm,
  shadowLg,
} from "../../styles/Helpers.styles";

export const LatestContainer = styled.section`
  padding: 3rem 1rem;

  ${({ theme }) => media.desktop`
    padding:${theme.utils["section-pad-desktop"]}
  `};

  .latest-heading__title {
    ${headingSecondary};
    text-align: center;
  }

  .latest-list {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    ${media.mobileLg`
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:space-evenly;
    `}
  }

  .latest-list--item {
    flex: 1;
    min-width: 20rem;
    max-width: 25rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${sectionBgTint};
    border-radius: ${({ theme }) => theme.utils["border-base"]};
    overflow: hidden;
    ${shadowSm};
    transition: all 0.25s ease;

    ${media.tablet`
      min-width:25rem;
    `}

    ${media.desktop`
      min-height:38rem;
      max-height:38rem;
    `}

    &__fig {
      width: 100%;
      aspect-ratio: 4/3;
      overflow: hidden;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: all 0.2s ease-out;
      }
    }

    :hover {
      cursor: pointer;
      ${shadowLg};
    }

    &:hover > figure > img {
      transform: scale(1.25);
    }
  }

  .item-details--box {
    padding: 0 1.5rem 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__author {
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.color["grayish-blue"]};
    }

    &__title {
      ${headingTertiary}
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.color["lime-green"]};
      }
    }

    &__description {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;
