import React, { useState } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("english");

  const onLanguageChange = lang => {
    setLanguage(lang);
  };

  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange("english")}></i>
        <i className="flag es" onClick={() => onLanguageChange("spanish")}></i>
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="green">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
