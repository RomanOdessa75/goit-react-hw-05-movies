import * as API from '../Api/apiMoviedb';
import { useState, useEffect } from 'react';

export const useMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    API.getMovieDetails(movieId).then(movieDetailsReturnedFromApi =>
      setMovieDetails(movieDetailsReturnedFromApi)
    );
  }, [movieId]);

  return { movieDetails };
};
