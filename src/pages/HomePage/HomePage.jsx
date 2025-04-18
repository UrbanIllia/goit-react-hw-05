import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (err) {
        setError('Failed to fetch trending movies.');
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={css.homeWrapper}>
      <h1 className={css.title}>Trending Movies</h1>
      {error && <p className={css.error}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
