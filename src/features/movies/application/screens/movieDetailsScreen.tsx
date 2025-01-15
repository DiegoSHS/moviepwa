"use client"
import { useMovies } from "@/features/movies/application/providers/moviesProvider";
import { MovieDetailsCard } from "./components/MovieCard";
import { Spinner } from "@nextui-org/react";

export const MovieDetailsView = () => {
    const { loading, movieDetails } = useMovies()
    return (
        loading ? <Spinner /> :
            <MovieDetailsCard movieDetails={movieDetails} />
    )
}