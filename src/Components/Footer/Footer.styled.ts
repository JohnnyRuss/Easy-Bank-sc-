import styled from "styled-components";
import { media } from "../../styles/Media.styled";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  background: ${({ theme }) => theme.color["dark-blue"]};
  padding: 3rem 1rem;

  ${({ theme }) => media.desktop`
    padding:${theme.utils["section-pad-desktop"]};
    flex-direction:row;
    gap:0;
  `};

  ${media.tablet`
    flex-direction:row;
  `}

  .logo-and-socials {
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 2rem;

    ${media.tablet`
      align-items:flex-start;
    `}
  }

  .socials-box {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & [data-logo] .logo-title {
    fill: ${({ theme }) => theme.color["app-white"]};
  }

  .nav-lists {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    gap: 0.75rem;
    color: ${({ theme }) =>
      theme.mode.isDark
        ? theme.color["grayish-blue"]
        : theme.color["app-white"]};

    ${media.tablet`
        flex-direction:row;
        gap:6rem;
    `}
  }

  .nav-lists__list {
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 0.75rem;

    ${media.tablet`
      align-items:flex-start;
    `}

    & li {
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.color["lime-green"]};
      }
    }
  }

  .invite-and-copy {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    ${media.tablet`
      align-items: flex-end;
    `}
  }

  .copy {
    color: ${({ theme }) =>
      theme.mode.isDark
        ? theme.color["grayish-blue"]
        : theme.color["app-white"]};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
