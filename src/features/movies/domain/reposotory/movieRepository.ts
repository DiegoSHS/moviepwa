import { MovieDetailsResult } from "../entities/movieDetailsResult";
import { MovieResult } from "../entities/moviesResult";

export abstract class MoviesRepository {
    abstract getPopularMovies(page?: number):
        Promise<MovieResult>
    abstract getMovieDetails(movieId: number):
        Promise<MovieDetailsResult>
}