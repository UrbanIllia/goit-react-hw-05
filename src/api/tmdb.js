// import axios from 'axios';

// const API_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzE3ZGFhZGQ1YjIxOTA2NDE2ZGRkNzIyNTcyODRkNCIsIm5iZiI6MTc0NDk3NzE5OC42MTUsInN1YiI6IjY4MDIzZDJlZTUwNmE4ZTNhMGFkMzU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fv8lHA8YsEtf6ovMgw3YeRuvg60Vqt3YCAauzDrB1ew';
// const BASE_URL = 'https://api.themoviedb.org/3';

// const options = {
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//   },
// };

// export const getTrendingMovies = async () => {
//   const response = await axios.get(
//     `${BASE_URL}/trending/movie/day?language=en-US`,
//     options
//   );
//   return response.data.results;
// };

// export const searchMovies = async (query, page = 1) => {
//   const response = await axios.get(
//     `${BASE_URL}/search/movie?query=${encodeURIComponent(
//       query
//     )}&include_adult=false&language=en-US&page=${page}`,
//     options
//   );
//   return response.data.results;
// };

// export const getMovieDetails = async (movieId) => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}?language=en-US`,
//     options
//   );
//   return response.data;
// };

// export const getMovieCredits = async (movieId) => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
//     options
//   );
//   return response.data.cast;
// };

// export const getMovieReviews = async (movieId) => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
//     options
//   );
//   return response.data.results;
// };
import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzE3ZGFhZGQ1YjIxOTA2NDE2ZGRkNzIyNTcyODRkNCIsIm5iZiI6MTc0NDk3NzE5OC42MTUsInN1YiI6IjY4MDIzZDJlZTUwNmE4ZTNhMGFkMzU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fv8lHA8YsEtf6ovMgw3YeRuvg60Vqt3YCAauzDrB1ew'; // Ваш токен
const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );
  return response.data.results;
};

export const searchMovies = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};
