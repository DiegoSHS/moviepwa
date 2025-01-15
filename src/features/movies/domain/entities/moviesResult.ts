import { Tv } from "@/features/tv/domain/entities/tv";
import { Movie } from "./movie";

export interface ApiResult {
    page: number;
    results: Movie[] | Tv[];
    total_pages: number;
    total_results: number;
}

export interface MovieResult extends ApiResult {
    results: Movie[];
}