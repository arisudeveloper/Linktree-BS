import React from "react";
import eng from "../../assets/images/languages/en.png";
import esp from "../../assets/images/languages/esp.png";
import fr from "../../assets/images/languages/fr.png";

import "./Languages.css";
import { useTranslation } from "react-i18next";

const Languages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="languages">
      <ul>
        <li>
          <button onClick={() => changeLanguage("en")} className="btnLanguages">
            <img src={eng} alt="English" title="english" />
          </button>
        </li>

        <li>
          <button onClick={() => changeLanguage("fr")} className="btnLanguages">
            <img src={fr} alt="Français" title="french" />
          </button>
        </li>

        <li>
          <button onClick={() => changeLanguage("es")} className="btnLanguages">
            <img src={esp} alt="Español" title="espanish" />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Languages;