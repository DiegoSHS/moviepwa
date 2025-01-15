import { GenreResult } from "../entities/genreResult";

export abstract class GenreRepository {
    abstract getGenres(): Promise<GenreResult>;
}