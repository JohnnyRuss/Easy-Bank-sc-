import { css } from "styled-components";
import { media } from "./Media.styled";

export const headingColor = () => css`
  color: ${({ theme }) =>
    theme.mode.isDark ? theme.color["grayish-blue"] : theme.color["dark-blue"]};
`;

export const textColor = () => css`
  color: ${({ theme }) =>
    theme.mode.isDark
      ? theme.color["text-color"]
      : theme.color["grayish-blue"]};
`;

export const sectionBgTint = () => css`
  background: ${({ theme }) =>
    theme.mode.isDark
      ? theme.color["black-light"]
      : theme.color["light-grayish-blue"]};
`;

export const headingPrimary = () => css`
  font-size: ${({ theme }) => theme.fontSize.heading};
  ${headingColor}
  text-transform: capitalize;
`;

export const headingSecondary = () => css`
  font-size: ${({ theme }) => theme.fontSize["h-2"]};
  font-weight: ${({ theme }) => theme.weight.regullar};
  ${headingColor}
  text-transform: capitalize;
`;

export const headingTertiary = () => css`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.weight.regullar};
  ${headingColor}
  text-transform: capitalize;

  ${({ theme }) => media.tablet`
    font-size: ${theme.fontSize.lg};
  `}
`;

export const shadowSm = () => css`
  box-shadow: ${({ theme }) =>
    theme.mode.isDark
      ? theme.utils["shadow-sm--white"]
      : theme.utils["shadow-sm"]};
`;

export const shadowLg = () => css`
  box-shadow: ${({ theme }) =>
    theme.mode.isDark
      ? theme.utils["shadow-lg--white"]
      : theme.utils["shadow-lg"]};
`;
