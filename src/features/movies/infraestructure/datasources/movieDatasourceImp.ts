import { ApiClient } from "@/features/apiClient";
import { MoviesDatasource } from "../../domain/datasources/movieDatasource";
import { MovieResult } from "../../domain/entities/moviesResult";
import { MovieDetailsResult } from "../../domain/entities/movieDetailsResult";

export class MovieDataSourceImp extends MoviesDatasource {
    async getPopularMovies(page: number = 1): Promise<MovieResult> {
        const { data } = await ApiClient.get<MovieResult>('/movie/popular', {
            params: {
                page
            }
        })
        return data
    }
    async getMovieDetails(movieId: number): Promise<MovieDetailsResult> {
        const { data } = await ApiClient.get<MovieDetailsResult>(`/movie/${movieId}`)
        return data
    }
}