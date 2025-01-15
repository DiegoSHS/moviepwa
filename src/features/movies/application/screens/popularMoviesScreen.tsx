"use client"
import { useMovies } from "../providers/moviesProvider"
import { useEffect } from "react"
import { useGenres } from "@/features/genres/application/providers/genresProvider"
import { MovieList } from "./components/MovieCard"
import { Spinner } from "@nextui-org/react"

export const PopularMoviesScreen = () => {
    const { loading, getPopularMovies, movies: { results } } = useMovies()
    const { getGenres, loading: loadingGenres } = useGenres()
    useEffect(() => {
        getPopularMovies()
        getGenres()
    }, []);
    return (
        (loading && loadingGenres) ? <Spinner /> : <MovieList movies={results} />
    )
}
