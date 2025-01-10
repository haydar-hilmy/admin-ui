import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const INITIAL_TMODE = localStorage.getItem("tmode") || false;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ name: "theme-green", color: "#299D91" });
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(INITIAL_TMODE))
  const [bgMode, setBgMode] = useState("bg-theme-light")
  const [txtMode, setTxtMode] = useState("text-dark")

  useEffect(() => {
    localStorage.setItem("tmode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    if(isDarkMode){
      setBgMode("bg-theme-dark")
      setTxtMode("text-light")
    } else {
      setBgMode("bg-theme-light")
      setTxtMode("text-dark")
    }
  }, [isDarkMode])
  
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, setIsDarkMode, bgMode, txtMode }}>
      {children}
    </ThemeContext.Provider>
  );
};