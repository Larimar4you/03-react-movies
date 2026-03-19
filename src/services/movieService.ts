import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

export async function searchMovies(query: string) {
  const response = await axios.get(`${API_URL}/search/movie`, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
}
