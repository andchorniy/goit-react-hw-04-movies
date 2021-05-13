import axios from "axios";

const API_KEY = "dc8a219507b80e9a1079e61c31f6a77a";
function fetchPopularMovies() {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
}
function fetchMovieById(movieId) {
  return axios.get(`
  https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

function fetchMovieByName(qeury) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${qeury}&page=1&include_adult=false`
  );
}
function fetchCast(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}
function fetchReview(id) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
export default {
  fetchPopularMovies,
  fetchMovieById,
  fetchMovieByName,
  fetchCast,
  fetchReview,
};
