import styled, { css, keyframes } from "styled-components";
import { media } from "../../../styles/Media.styled";
import { shadowSm } from "../../../styles/Helpers.styles";

const collapse_down = keyframes`
    0%{
      height:0vh;
    }
    100%{
      height:100vh;
    }
`;

const collapse_right = keyframes`
    0%{
      width:0rem;
      opacity: 0;
    }
    100%{
      width:32rem;
      opacity: 1;
    }
`;

export const Nav = styled.nav<{ navIsOpen: boolean }>`
  position: sticky;
  z-index: 19;
  top: 0;
  background: ${({ theme }) => theme.color["bg-color"]};
  box-shadow: ${({ theme }) =>
    theme.mode.isDark
      ? theme.utils["shadow-bottom-sm--white"]
      : theme.utils["shadow-bottom-sm--black"]};

  .nav-container {
    width: 100%;
    max-width: ${({ theme }) => theme.breakPoint.container};
    margin: 0 auto;
    height: 8rem;
    padding: 1.5rem 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }

  [data-invite-btn] {
    display: none;
    width: max-content;

    ${media.tabletLg`
      display: block;
      margin-left: auto;
    `}
  }

  .burger {
    ${media.tabletLg`
      display:none;
    `}
  }

  .burger svg {
    fill: ${({ theme }) => theme.color["text-color"]};
  }

  .nav-list-wrapper {
    margin: 0 auto;
    display: none;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.color["dark-blue"]},
      transparent
    );

    ${({ theme, navIsOpen }) => css`
      display: ${navIsOpen ? "flex" : "none"};
      position: fixed;
      top: 8rem;
      left: 0;
      height: 100vh;
      width: 100%;
      justify-content: center;
      padding-top: 3rem;
      animation: ${collapse_down} 0.2s ease-out forwards;
    `}

    ${media.tabletLg`
      display:flex;
      position: unset;
      top:0;
      height: 100%;
      width: auto;
      padding-top:0;
      background:transparent;
      animation: none;
    `};

    .nav-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      text-transform: capitalize;
      height: 30rem;
      opacity: 0;
      width: 0rem;
      background: ${({ theme }) => theme.color["app-white"]};
      color: ${({ theme }) => theme.color["grayish-blue"]};
      border-radius: ${({ theme }) => theme.utils["border-base"]};
      ${shadowSm};
      animation: ${collapse_right} 0.2s ease-in forwards;
      animation-delay: 0.25s;

      ${({ theme }) => media.tabletLg`
        flex-direction:row;
        position: relative;
        height: 100%;
        width:100%;
        background: transparent;
        color:${theme.color["text-color"]};
        border-radius:none;
        box-shadow:none;
        animation: none;
        opacity: 1;
      `}
    }

    & li {
      transition: all 0.2s ease;
      cursor: pointer;
    }

    & li:hover {
      color: ${({ theme }) => theme.color["lime-green"]};
    }
  }

  .theme-btn {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
  }
`;
