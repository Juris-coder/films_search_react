import {IMDB_URL} from '../configs/env'

export const makeFilmURL = (id, title) => {
    const cleanTitle = title
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
    return `${IMDB_URL}${id}-${cleanTitle}`;
  };