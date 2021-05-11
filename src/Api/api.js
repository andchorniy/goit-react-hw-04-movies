import axios from "axios";

const API_KEY = "dc8a219507b80e9a1079e61c31f6a77a";
function fetchPopularMovies() {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
}
function fetchMovieById(movieId) {
  return axios.get(`
  https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export default { fetchPopularMovies, fetchMovieById };
