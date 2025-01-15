"use client"
import { createContext, FC, useContext, useReducer } from "react";
import { MoviesRepositoryImp } from "../../infraestructure/repository/movieRepositoryImp";
import { MovieDataSourceImp } from "../../infraestructure/datasources/movieDatasourceImp";
import { MovieResult } from "../../domain/entities/moviesResult";
import { MovieDetailsResult } from "../../domain/entities/movieDetailsResult";

interface MoviesState {
    movies: MovieResult;
    movieDetails: MovieDetailsResult;
    loading: boolean;
}

interface MoviesContextDefinition extends MoviesState {
    getPopularMovies(page?: number): void;
    getMovieDetails(movieId: number): void;
}

const initialMoviesState: MoviesState = {
    movies: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    movieDetails: {
        adult: false,
        backdrop_path: '',
        belongs_to_collection: '',
        budget: 0,
        genres: [],
        genre_ids: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    loading: false
}

const defaultMovieContext: MoviesContextDefinition = {
    ...initialMoviesState,
    getPopularMovies: () => { },
    getMovieDetails: () => { }
}

const MoviesContext = createContext(defaultMovieContext);

type ReducerAction = {
    type: 'Loading';
    payload: boolean;
} | {
    type: 'GetPopularMovies';
    payload: MovieResult
} | {
    type: 'GetMovieDetails';
    payload: MovieDetailsResult
}

const MoviesReducer = (state: MoviesState, action: ReducerAction) => {
    switch (action.type) {
        case 'Loading':
            return {
                ...state,
                loading: action.payload
            }
        case 'GetPopularMovies':
            return {
                ...state,
                movies: {
                    ...action.payload
                },
                loading: false
            }
        case 'GetMovieDetails':
            return {
                ...state,
                movieDetails: {
                    ...action.payload
                },
                loading: false
            }
        default:
            return state
    }
}

type ContextProps = {
    children: React.ReactNode;
}


export const MoviesProvider: FC<ContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(MoviesReducer, initialMoviesState)
    const reposotory = new MoviesRepositoryImp(
        new MovieDataSourceImp()
    )
    const getPopularMovies = async (page: number = 1) => {
        if (page < 1) return
        dispatch({ type: 'Loading', payload: true })
        const movies = await reposotory.getPopularMovies(page)
        dispatch({ type: 'GetPopularMovies', payload: movies })
    }
    const getMovieDetails = async (movieId: number) => {
        dispatch({ type: 'Loading', payload: true })
        const movieDetails = await reposotory.getMovieDetails(movieId)
        dispatch({ type: 'GetMovieDetails', payload: movieDetails })
    }
    return (
        <MoviesContext.Provider value={{
            ...state,
            getMovieDetails,
            getPopularMovies
        }}>
            {
                children
            }
        </MoviesContext.Provider>
    )
}

export const useMovies = () => useContext(MoviesContext)