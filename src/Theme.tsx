import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeLight, ThemeDark } from "./styles/Theme.styled";
import { GlobalStyles } from "./styles/GlobalStyles.styled";

interface ThemeProviderType {
  children: React.ReactNode;
}

export enum ThemeMode {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

interface ThemeContextType {
  mode: ThemeMode;
  changeTheme: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: ThemeMode.LIGHT,
  changeTheme: (mode: ThemeMode) => {},
});

const Theme: React.FC<ThemeProviderType> = ({ children }) => {
  const [theme, setTheme] = useState({
    activeTheme: ThemeLight,
    mode: ThemeMode.LIGHT,
  });

  function changeTheme(mode: ThemeMode) {
    setTheme(() =>
      mode === ThemeMode.LIGHT
        ? {
            activeTheme: ThemeLight,
            mode: ThemeMode.LIGHT,
          }
        : {
            activeTheme: ThemeDark,
            mode: ThemeMode.DARK,
          }
    );
  }

  return (
    <ThemeProvider theme={theme.activeTheme}>
      <ThemeContext.Provider value={{ mode: theme.mode, changeTheme }}>
        <GlobalStyles />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
