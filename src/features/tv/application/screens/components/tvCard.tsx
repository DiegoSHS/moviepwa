"use client"
import { IMAGE_URL } from "@/features/apiClient"
import { useGenres } from "@/features/genres/application/providers/genresProvider"
import { FlatList } from "@/features/movies/application/screens/components/MovieCard"
import { Tv } from "@/features/tv/domain/entities/tv"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"
import Image from "next/image"


export const TvCard = ({ tvShow }: { tvShow: Tv }) => {
    const { genres } = useGenres()
    return (
        <Card>
            <CardHeader>
                {tvShow.name}
                <div>
                    <h1>
                        {tvShow.first_air_date.split("-")[0]}
                    </h1>
                    <h1>
                        {tvShow.vote_average.toFixed(1)}
                    </h1>
                </div >
            </CardHeader>
            <CardBody>
                <Image
                    src={`${IMAGE_URL}${tvShow.poster_path}`}
                    alt={tvShow.name}
                    width={200}
                    height={300}
                />
                {tvShow.overview}
            </CardBody>
            <CardFooter>
                {
                    tvShow.genre_ids.map((genre) => (
                        <h1 key={genre}>
                            {genres.find(({ id }) => id === genre)?.name || "No genre name"}
                        </h1>
                    ))
                }
            </CardFooter>
        </Card >
    )
}

export const TvList = ({ tvShows }: { tvShows: Tv[] }) => {
    return (
        <FlatList
            data={tvShows}
            renderItem={({ item }) => <TvCard tvShow={item} />}
            keyExtractor={({ id }) => `${id}`}
        />
    )
}