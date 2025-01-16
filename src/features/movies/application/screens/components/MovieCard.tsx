"use client"
import { IMAGE_URL } from "@/features/apiClient"
import { useGenres } from "@/features/genres/application/providers/genresProvider"
import { Movie } from "@/features/movies/domain/entities/movie"
import { MovieDetailsResult } from "@/features/movies/domain/entities/movieDetailsResult"
import { Card, CardBody, CardFooter, CardHeader, Chip } from "@nextui-org/react"
import Image from "next/image"
import { JSX } from "react"

export const MovieCard = ({ movie }: { movie: Movie }) => {
    const { genres } = useGenres()
    return (
        <Card isPressable isFooterBlurred classNames={{
            footer: "justify-between overflow-hidden py-1 absolute bottom-0 shadow-small z-10 flex-wrap",
            header: "absolute z-10 top-0 flex-col items-start backdrop-blur shadow-small",
        }}>
            <Image
                className="object-cover"
                style={{ borderRadius: 10 }}
                alt="Movie poster"
                width={300}
                height={200}
                src={`${IMAGE_URL}/original/${movie.poster_path}`}
                loading="lazy"
            />
            <CardHeader className="flex flex-row gap-2 justify-between">
                <h3 className="text-white font-medium text-md">
                    {movie.title}
                </h3>
                <h3 className="text-white/60 uppercase font-bold">
                    {movie.release_date.split("-")[0]}
                </h3>
            </CardHeader>
            <CardFooter>
                {movie.genre_ids.map((genre) => (
                    <Chip variant="light" key={genre} >
                        {genres.find(({ id }) => id === genre)?.name}
                    </Chip>
                ))}
            </CardFooter>
        </Card>
    )
}

interface FLatListProps<T> {
    data: T[],
    keyExtractor: (item: T) => string,
    renderItem: ({ item }: { item: T }) => JSX.Element
}

export function FlatList<T>({ data, keyExtractor, renderItem }: FLatListProps<T>) {
    return (
        <div>
            {data.map((item) =>
            (<div key={keyExtractor(item)}>
                {
                    renderItem({ item })
                }
            </div>
            ))}
        </div>
    )
}

export const MovieList = ({ movies }: { movies: Movie[] }) => {
    return (
        <FlatList
            data={movies}
            keyExtractor={({ id }) => `${id}`}
            renderItem={({ item }) => <MovieCard movie={item} />}
        />
    )
}


export const MovieDetailsCard = ({ movieDetails }: { movieDetails: MovieDetailsResult }) => {
    return (
        <Card>
            <CardHeader>
                {movieDetails.title}
                <h1 >
                    {movieDetails.tagline}
                </h1>
            </CardHeader>
            <CardBody>
                <Image alt="Movie poster" width={200} height={200} src={`${IMAGE_URL}/original/${movieDetails.poster_path}`} />
                <div>
                    <h1>
                        {movieDetails.overview}
                    </h1>
                </div>
                <div>
                    <h1 >
                        Duration: {movieDetails.runtime} minutes
                    </h1>
                    <h1 >
                        Release date: {movieDetails.release_date}
                    </h1>
                </div>
                <h1 >
                    Production companies
                </h1>
                <div >
                    {movieDetails.production_companies.map((company) => <h1 key={company.id}>{company.name}</h1>)}
                </div >
                <h1 >
                    Production countries
                </h1>
                <div>
                    {movieDetails.production_countries.map((country) => <h1 key={country.iso_3166_1}>{country.name}</h1>)}
                </div >
            </CardBody>
            <CardFooter>
                {movieDetails.genres.map((genre) => (
                    <Chip key={genre.id} >
                        {genre.name}
                    </Chip>
                ))}
                <h1>
                    {movieDetails.vote_average} score
                </h1>
                <h1 >
                    {movieDetails.vote_count} votes
                </h1>
                <h1 >
                    {movieDetails.popularity} popularity
                </h1>
            </CardFooter>
        </Card>
    )
}
