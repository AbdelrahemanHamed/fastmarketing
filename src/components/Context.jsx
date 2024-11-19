import { createContext, useState } from "react";
import i18n from "i18next";
export let Context = createContext("");

// eslint-disable-next-line react/prop-types
export function ContextProvider({ children }) {
  let [sidebarOpen, setSidebarOpen] = useState(true);
  let [language, setLanguage] = useState("ar");

  function languageChanger(selectedLanguage) {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }

  return (
    <Context.Provider
      value={{ sidebarOpen, setSidebarOpen, language, languageChanger }}
    >
      {children}
    </Context.Provider>
  );
}
