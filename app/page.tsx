import CarausalBannerWrapper from "@/components/CarausalBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Button } from "@/components/ui/button";
import { getTopPopularMovies, getTopRatesMovies, getUpComingMovies, getpopularMovies } from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {

  const upComingMovies = await getUpComingMovies()
  const topRatedMovies = await getTopRatesMovies()
  const popularMovies = await getpopularMovies()
  // const popularMovies = getMovies('https://')

  
  return (
    <main className="">

      {/** Carausal Banner Wrapper */}
      <CarausalBannerWrapper />
      
      <div className="flex flex-col space-y-2 xl:mt-18">
        <MoviesCarousel movies={upComingMovies} title='Upcoming' isVertical={false} />
        <MoviesCarousel movies={topRatedMovies} title='Popular'  isVertical={false}/>
        <MoviesCarousel movies={popularMovies} title='Upcoming'  isVertical={false}/>
      </div>
    </main>
  );
}
