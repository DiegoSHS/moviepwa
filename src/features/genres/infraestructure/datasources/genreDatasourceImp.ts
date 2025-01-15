import { ApiClient } from "@/features/apiClient";
import { GenreDatasource } from "../../domain/datasources/genreDatasource";
import { GenreResult } from "../../domain/entities/genreResult";

export class GenreDatasourceImp extends GenreDatasource {
    async getGenres() {
        const { data } = await ApiClient.get<GenreResult>('/genre/movie/list');
        return data
    }
}