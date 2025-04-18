import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/tmdb';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (err) {
        setError('Failed to fetch reviews.');
      }
    };
    fetchReviews();
  }, [movieId]);

  if (!reviews.length && !error) return null;

  return (
    <div className={css.reviewsWrapper}>
      {error && <p className={css.error}>{error}</p>}
      {reviews.length === 0 && !error && (
        <p className={css.noReviews}>No reviews available.</p>
      )}
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewItem}>
            <h3 className={css.author}>{review.author}</h3>
            <p className={css.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
