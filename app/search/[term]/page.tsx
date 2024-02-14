import MoviesCarousel from '@/components/MoviesCarousel';
import { getSearchMovies, getpopularMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        term: string,
    }
}

async function SearchPage({ params: { term } }: Props) {
    if(!term) notFound();

    //API call to get Search movies
    //API call to get Popular Movies

    const termToUse = decodeURI(term)

    const movies = await getSearchMovies(termToUse);
    const popularMovies = await getpopularMovies();

    return (
        <div className='max-w-7xl  mx-auto'>
            <div className='flex flex-col space-y-4 mt-32 xl:mt-82'>
                <h1 className='text-5xl font-bold px-10'>Results for {termToUse}</h1>

                {/** AI Suggessions */}
                
                <MoviesCarousel movies={movies} isVertical/>
                <MoviesCarousel movies={popularMovies} isVertical={false}/>
            </div>
        </div>
    )
}

export default SearchPage