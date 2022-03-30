import React, { useContext } from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

const Button = () => {
  const lang = useContext(LanguageContext);
  const color = useContext(ColorContext);

  const displayText = lang => {
    switch (lang) {
      case "english":
        return "Submit";
      case "spanish":
        return "Enviar";
      default:
        return "Submit";
    }
  };

  return <button className={`ui button ${color}`}>{displayText(lang)}</button>;
};

export default Button;
