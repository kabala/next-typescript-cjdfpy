import { log } from 'console';
import { useEffect, useState } from 'react';
import { GET_DATA } from '../mocks/apiEndpoints';
import { GetDataResponseType } from '../types';

export default function List() {
  let [movies, setMovies] = useState<GetDataResponseType[]>([]);

  useEffect(() => {
    fetch(GET_DATA)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.movies);
      });
  }, []);

  console.log({ movies });

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.name} ({movie.year})
        </li>
      ))}
    </ul>
  );
}
