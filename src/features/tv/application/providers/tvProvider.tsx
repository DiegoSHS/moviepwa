"use client"
import { createContext, useContext, useReducer } from "react";
import { TvResult } from "../../domain/entities/tvResult";
import { TvRepositoryImp } from "../../infraestructure/repository/tvRepositoryImp";
import { TvDatasourceImp } from "../../infraestructure/datasources/tvDatasourceImp";

interface TvState {
    tvShows: TvResult;
    loading: boolean;
}

interface TvContextDefinition extends TvState {
    getPopularTvShows(page?: number): void;
}

const initialTvState: TvState = {
    loading: false,
    tvShows: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }
}

const defaultTvContext: TvContextDefinition = {
    ...initialTvState,
    getPopularTvShows: () => { }
}

const TvContext = createContext(defaultTvContext)

type ReducerAction = {
    type: 'Loading';
    payload: boolean;
} | {
    type: 'GetPopularMovies';
    payload: TvResult;
}

const TvReducer = (state: TvState, action: ReducerAction) => {
    switch (action.type) {
        case 'Loading':
            return {
                ...state,
                loading: action.payload
            }
        case 'GetPopularMovies':
            return {
                ...state,
                loading: false,
                tvShows: action.payload
            }
        default:
            return state
    }
}

export const TvProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(TvReducer, initialTvState)
    const repository = new TvRepositoryImp(
        new TvDatasourceImp()
    )
    const getPopularTvShows = async (page: number = 1) => {
        if (page < 1) return
        dispatch({ type: 'Loading', payload: true })
        const response = await repository.getPopularTvShows(page)
        dispatch({ type: 'GetPopularMovies', payload: response })
    }
    return (
        <TvContext.Provider value={{ ...state, getPopularTvShows }}>
            {children}
        </TvContext.Provider>
    )
}

export const useTv = () => useContext(TvContext)