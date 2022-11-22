import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before {
     margin:0;
     padding:0;
     box-sizing: border-box;
   }

   html {
    font-size: 62.5%;
    scroll-behavior: smooth;
   }

   body {
    background: ${({ theme }) => theme.color["bg-color"]};
    color:${({ theme }) => theme.color["text-color"]};
    font-family: 'Public Sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.weight.thin};
   }

   ::-webkit-scrollbar {
    width: 12px;
   }

   ::-webkit-scrollbar-thumb {
    background: ${({theme})=>theme.color["grayish-blue"]};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 12px;
    background: ${({theme})=>theme.color["light-grayish-blue"]};
  }

   button {
    border:none;
    background:none;
    cursor:pointer;
    color:inherit;
    text-transform: inherit;
   }

   ul {
    list-style: none;
   }

   a{
    text-decoration: none;
    color:inherit;
   }
`;
