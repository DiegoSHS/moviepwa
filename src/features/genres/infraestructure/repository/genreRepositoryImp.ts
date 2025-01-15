import { GenreResult } from "../../domain/entities/genreResult";
import { GenreRepository } from "../../domain/repository/genreRepository";
import { GenreDatasourceImp } from "../datasources/genreDatasourceImp";

export class GenreRepositoryImp extends GenreRepository {
    dataSource: GenreDatasourceImp;
    constructor(dataSource: GenreDatasourceImp) {
        super();
        this.dataSource = dataSource;
    }
    getGenres(): Promise<GenreResult> {
        return this.dataSource.getGenres();
    }
}