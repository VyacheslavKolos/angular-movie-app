import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  getAllMovies:`${API}/discover/movie`,
  getAllGenres:`${API}/genre/movie/list`,
  image: 'https://image.tmdb.org/t/p/w500'
}
