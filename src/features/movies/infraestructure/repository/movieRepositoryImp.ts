import { MoviesDatasource } from "../../domain/datasources/movieDatasource";
import { MovieDetailsResult } from "../../domain/entities/movieDetailsResult";
import { MovieResult } from "../../domain/entities/moviesResult";
import { MoviesRepository } from "../../domain/reposotory/movieRepository";

export class MoviesRepositoryImp extends MoviesRepository {
    dataSource: MoviesDatasource
    constructor(dataSource: MoviesDatasource) {
        super()
        this.dataSource = dataSource
    }
    getPopularMovies(page: number = 1): Promise<MovieResult> {
        return this.dataSource.getPopularMovies(page)
    }
    getMovieDetails(movieId: number): Promise<MovieDetailsResult> {
        return this.dataSource.getMovieDetails(movieId)
    }
}