import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/tmdb';
import noActorPhoto from '/src/assets/images/no-photo1.png';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (err) {
        setError('Failed to fetch cast.');
      }
    };
    fetchCast();
  }, [movieId]);

  if (!cast.length && !error) return null;

  return (
    <div className={css.castWrapper}>
      {error && <p className={css.error}>{error}</p>}
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : noActorPhoto
              }
              alt={actor.name}
              className={css.actorPhoto}
            />
            <p className={css.actorName}>{actor.name}</p>
            <p className={css.character}>as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
