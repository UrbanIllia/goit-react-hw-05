import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';
import toast from 'react-hot-toast';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data);
        if (data.length === 0) {
          toast.error('No movies found.');
        }
      } catch (err) {
        setError('Failed to search movies.');
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuery = form.elements.query.value.trim();
    if (newQuery) {
      setSearchParams({ query: newQuery });
    } else {
      toast.error('Please enter a search query.');
    }
  };

  return (
    <div className={css.moviesWrapper}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies..."
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C11.96 18 13.76 17.31 15.17 16.13L19.54 20.5C19.93 20.89 20.57 20.89 20.96 20.5C21.35 20.11 21.35 19.47 20.96 19.08L16.59 14.71C17.77 13.3 18.46 11.5 18.46 9.54C18.46 5.12 14.88 1.54 10.46 1.54C6.04 1.54 2.46 5.12 2.46 9.54H2C2 5.58 5.58 2 10 2ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
              fill="#1c2526"
            />
          </svg>
        </button>
      </form>
      {error && <p className={css.error}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
