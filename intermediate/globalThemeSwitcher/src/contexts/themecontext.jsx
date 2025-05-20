import { createContext, useEffect, useState, useContext } from "react";

export const GlobalContext = createContext();

export const useTheme = () => useContext(GlobalContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // document.body.className = isDark ? "dark" : "";
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "");
  }, [isDark]);

  return (
    <GlobalContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};
