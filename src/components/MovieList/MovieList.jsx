// import { Link, useLocation } from 'react-router-dom';
// import css from './MovieList.module.css';
// import defaultPoster from '../../assets/images/no-poster2.png';

// const MovieList = ({ movies }) => {
//   const location = useLocation();

//   return (
//     <ul className={css.movieList}>
//       {movies.map((movie) => (
//         <li key={movie.id} className={css.movieItem}>
//           <Link
//             to={`/movies/${movie.id}`}
//             state={{ from: location }}
//             className={css.movieLink}
//           >
//             <img
//               src={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
//                   : defaultPoster
//               }
//               alt={movie.title}
//               className={css.poster}
//             />
//             <h3 className={css.title}>{movie.title}</h3>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieList;

import { Link, useLocation } from 'react-router-dom';
import defaultPoster from '../../assets/images/no-poster2.png';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie, index) => (
        <li
          key={movie.id}
          className={css.movieItem}
          style={{ animationDelay: `${index * 0.1}s` }} // Додаємо затримку для кожної карточки
        >
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.movieLink}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
              className={css.poster}
            />
            <h3 className={css.title}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
