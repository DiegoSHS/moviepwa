import { TvResult } from "../entities/tvResult";

export abstract class TvRepository {
    abstract getPopularTvShows(page?: number): Promise<TvResult>;
}