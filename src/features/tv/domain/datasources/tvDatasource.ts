import { TvResult } from "../entities/tvResult";

export abstract class TvDatasource {
    abstract getPopularTvShows(page?: number): Promise<TvResult>;
}