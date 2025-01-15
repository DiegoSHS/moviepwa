"use client"
import { createContext, useContext, useReducer } from "react";
import { GenreResult } from "../../domain/entities/genreResult";
import { GenreRepositoryImp } from "../../infraestructure/repository/genreRepositoryImp";
import { GenreDatasourceImp } from "../../infraestructure/datasources/genreDatasourceImp";

interface GenreState extends GenreResult {
    loading: boolean;
}

interface GenreContextDefinition extends GenreState {
    getGenres: () => void;
}

const defaultGenresContext: GenreContextDefinition = {
    genres: [],
    loading: false,
    getGenres: () => { },
}

const initialState: GenreState = {
    loading: false,
    genres: [],
}

type GenreAction = {
    type: "Loading";
    payload: boolean;
} | {
    type: "Loaded";
    payload: GenreResult;
}

const genresReducer = (state: GenreState, action: GenreAction) => {
    switch (action.type) {
        case "Loading":
            return { ...state, loading: action.payload };
        case "Loaded":
            return { ...state, ...action.payload, loading: false };
        default:
            return state;
    }
}

const GenresContext = createContext(defaultGenresContext);

type GenresProviderProps = {
    children: React.ReactNode;
}

export const GenresProvider = ({ children }: GenresProviderProps) => {
    const [state, dispatch] = useReducer(genresReducer, initialState);
    const genresRepo = new GenreRepositoryImp(
        new GenreDatasourceImp()
    )
    const getGenres = async () => {
        dispatch({ type: "Loading", payload: true });
        const { genres } = await genresRepo.getGenres()
        dispatch({ type: "Loaded", payload: { genres } });
    }
    return (
        <GenresContext.Provider value={{
            ...state,
            getGenres,
        }}>
            {children}
        </GenresContext.Provider>
    )
}

export const useGenres = () => useContext(GenresContext);