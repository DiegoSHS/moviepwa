import { ApiClient } from "@/features/apiClient";
import { TvDatasource } from "../../domain/datasources/tvDatasource";
import { TvResult } from "../../domain/entities/tvResult";

export class TvDatasourceImp extends TvDatasource {
    async getPopularTvShows(page: number = 1): Promise<TvResult> {
        const { data } = await ApiClient.get<TvResult>('/tv/popular', {
            params: {
                page
            }
        })
        return data
    }
}