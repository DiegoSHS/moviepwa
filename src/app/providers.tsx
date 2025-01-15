// app/providers.tsx

import { GenresProvider } from '@/features/genres/application/providers/genresProvider'
import { MoviesProvider } from '@/features/movies/application/providers/moviesProvier'
import { TvProvider } from '@/features/tv/application/providers/tvProvider'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <GenresProvider>
                <MoviesProvider>
                    <TvProvider>
                        {children}
                    </TvProvider>
                </MoviesProvider>
            </GenresProvider>
        </NextUIProvider>
    )
}