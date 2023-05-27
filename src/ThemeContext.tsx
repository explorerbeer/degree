import React from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  darkMode: false,
  toggleDarkMode: () => {},
});
