import { GenreResult } from "../entities/genreResult";

export abstract class GenreDatasource {
    abstract getGenres(): Promise<GenreResult>;
}