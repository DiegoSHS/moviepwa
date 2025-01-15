import { MovieDetailsResult } from "../entities/movieDetailsResult";
import { MovieResult } from "../entities/moviesResult";

export abstract class MoviesDatasource {
    abstract getPopularMovies(page?: number):
        Promise<MovieResult>
    abstract getMovieDetails(movieId: number):
        Promise<MovieDetailsResult>
}