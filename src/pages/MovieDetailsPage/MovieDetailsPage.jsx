import { useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  NavLink,
} from 'react-router-dom';
// const defaultPoster1 = '/src/assets/images/no-poster2.png';
import defaultPoster1 from '/src/assets/images/no-poster2.png';
import { getMovieDetails } from '../../api/tmdb';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError('Failed to fetch movie details.');
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : defaultPoster1;
  // '/src/assets/images/no-poster2.png';
  return (
    <div className={css.detailsWrapper}>
      <button onClick={() => navigate(backLink)} className={css.backButton}>
        Go back
      </button>
      {error && <p className={css.error}>{error}</p>}
      <div className={css.movieInfo}>
        <img src={posterUrl} alt={movie.title} className={css.poster} />
        <div className={css.info}>
          <h1 className={css.title}>{movie.title}</h1>
          <p className={css.overview}>{movie.overview}</p>
          <p className={css.rating}>
            Rating: {movie.vote_average.toFixed(1)}/10
          </p>
          <p className={css.releaseDate}>Release Date: {movie.release_date}</p>
          <p className={css.genres}>
            Genres: {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          {movie.runtime && (
            <p className={css.runtime}>
              Runtime: {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </p>
          )}
          {movie.budget > 0 && (
            <p className={css.budget}>
              Budget: ${movie.budget.toLocaleString()}
            </p>
          )}
          {movie.revenue > 0 && (
            <p className={css.revenue}>
              Revenue: ${movie.revenue.toLocaleString()}
            </p>
          )}
        </div>
      </div>
      <div className={css.additionalInfo}>
        <nav className={css.subNav}>
          <NavLink
            to="cast"
            className={({ isActive }) =>
              isActive ? css.subNavLinkActive : css.subNavLink
            }
          >
            Cast
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? css.subNavLinkActive : css.subNavLink
            }
          >
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
