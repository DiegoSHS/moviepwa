"use client"
import { useGenres } from "@/features/genres/application/providers/genresProvider"
import { useTv } from "../providers/tvProvider"
import { useEffect } from "react"
import { TvList } from "./components/tvCard"
import { Spinner } from "@nextui-org/react"

export const PopularTvView = () => {
    const { getPopularTvShows, loading, tvShows: { results } } = useTv()
    const { getGenres, loading: loadingGenres } = useGenres()
    useEffect(() => {
        getPopularTvShows()
        getGenres()
    }, [])
    return (
        (loading && loadingGenres) ? <Spinner /> :
            <TvList tvShows={results} />
    )
}