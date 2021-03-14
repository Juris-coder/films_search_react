import * as React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { apiCall } from "../../api/apiCall";
import { useRoveFocus } from "../../utils";
import * as templates from "./templates";

const useFindFilm = (filmName) => {
  const [error, setError] = React.useState(null);
  const [query, setQuery] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      setQuery(true);
      const result = await apiCall(filmName);
      setLoading(false);
      setItems(result.results);
    } catch (error) {
      setItems([]);
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (filmName !== "") {
      const timeout = setTimeout(() => fetchFilms(), 700);
      return () => clearTimeout(timeout);
    }
  }, [filmName]);

  return { items, loading, error, query };
};

export const Autocomplete = (props) => {
  const { templateType, filmName } = props;
  const { items, loading, error, query } = useFindFilm(filmName);
  const [focus, setFocus] = useRoveFocus(films.length);
  const Template = templates[templateType];

  const films = templateType === "Poster" ? items.slice(0, 3) : items;

  if (error) {
    return (
      <div className={styles.autocompleteStyling}>An error has occured.</div>
    );
  }

  if (loading) {
    return <div className={styles.autocompleteStyling}>Loading...</div>;
  }

  if (!query) {
    return null;
  } else if (query && items.length === 0) {
    return <div className={styles.autocompleteStyling}>No results</div>;
  } else if (query && items.length !== 0) {
    return (
      <div className={styles.autocompleteStyling}>
        <div
          className={classNames(styles.autocompleteItems, {
            [styles.posters]: templateType === "Poster",
          })}
        >
          {films.map((film, i) => (
            <Template
              {...film}
              key={film.id}
              index={i}
              items={films}
              focus={focus === i}
              setFocus={setFocus}
            />
          ))}
        </div>
      </div>
    );
  }
};