import * as React from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-gg/search";

import styles from "./styles.module.scss";
import { Autocomplete } from "..";
import * as templates from "../Autocomplete/templates";

const templateNames = Object.keys(templates);

export const Input = () => {
  const [filmName, setFilmName] = React.useState("");
  const [template, setTemplate] = React.useState("Poster");

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <Icon className={styles.iconify} icon={searchIcon} />
        <div className={styles.inputOuter}>
          <input
            className={styles.query}
            placeholder="start typing..."
            onChange={(event) => setFilmName(event.target.value)}
            value={filmName}
          />
          <div className={styles.radio}>
            {templateNames.map((templateName) => (
              <div key={templateName}>
                <label>
                  {templateName}
                  <input
                    className={styles.radioInput}
                    checked={template === templateName}
                    type="radio"
                    onChange={() => setTemplate(templateName)}
                    name="type"
                    value={templateName}
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <Autocomplete filmName={filmName} templateType={template} />
      </div>
    </div>
  );
};
