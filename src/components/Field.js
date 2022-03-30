import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const Field = () => {
  const lang = useContext(LanguageContext);

  const displayText = lang => {
    switch (lang) {
      case "english":
        return "Name";
      case "spanish":
        return "Nombre";
      default:
        return "Name";
    }
  };

  return (
    <div className="ui field">
      <label>{displayText(lang)}</label>
      <input />
    </div>
  );
};

export default Field;
