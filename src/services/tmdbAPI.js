import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const END_POINT = {
  trending: 'trending/all/day',
  search: 'search/movie',
  details: 'movie',
}
const API_KEY = `410fd68cb4c9784c1149ddbecbed6a6d`;

export const getTrendingMovies = async () => {
  return axios.get(`${BASE_URL}${END_POINT.trending}?api_key=${API_KEY}`).then(resp=>resp.data.results)
}
  
export const searchMovies  = async (query) => {
  return axios.get(`${BASE_URL}${END_POINT.search}?query=${query}&api_key=${API_KEY}`).then(resp=>resp.data.results)
  }
  
export const getMovieDetails = async (id) => {
  return axios.get(`${BASE_URL}${END_POINT.details}/${id}?api_key=${API_KEY}`).then(resp=>resp)
  }
  
export const getMovieCredits  = async (id) => {
  return axios.get(`${BASE_URL}${END_POINT.details}/${id}/credits?api_key=${API_KEY}`).then(resp=>resp)
  }
  
export const getMovieReviews  = async (id) => {
  return axios.get(`${BASE_URL}${END_POINT.details}/${id}/reviews?api_key=${API_KEY}`).then(resp=>resp)
  }

