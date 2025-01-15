import { ApiResult } from "@/features/movies/domain/entities/moviesResult";
import { Tv } from "./tv";

export interface TvResult extends ApiResult {
    results: Tv[];
}