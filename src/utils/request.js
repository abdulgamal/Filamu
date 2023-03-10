const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default {
  fetchTrending: {
    title: "Trending",
    url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchSciFi: {
    title: "Western",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTv: {
    title: "Tv Movie",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
