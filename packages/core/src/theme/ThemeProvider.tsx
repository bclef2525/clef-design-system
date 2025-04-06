import React from "react";
import { Theme } from "./types";

interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<Theme>({});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
