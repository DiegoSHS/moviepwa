import { TvDatasource } from "../../domain/datasources/tvDatasource"
import { TvResult } from "../../domain/entities/tvResult"
import { TvRepository } from "../../domain/repository/tvRespository"

export class TvRepositoryImp extends TvRepository {
    dataSource: TvDatasource
    constructor(dataSource: TvDatasource) {
        super()
        this.dataSource = dataSource
    }
    getPopularTvShows(page: number = 1): Promise<TvResult> {
        return this.dataSource.getPopularTvShows(page)
    }
}