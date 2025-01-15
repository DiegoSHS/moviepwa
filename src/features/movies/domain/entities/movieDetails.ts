import { Genre } from "@/features/genres/domain/entities/genre";
import { Movie } from "./movie";
import { ProductionCompany } from "@/features/companies/domain/entities/productionCompany";

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieDetails extends Movie {
    belongs_to_collection: string;
    budget: number;
    genres: Genre[];
    homepage: string;
    imdb_id: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    video: boolean;
}