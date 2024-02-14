import { getDiscoverMovies } from "@/lib/getMovies"
import CarausalBanner from "./CarausalBanner";


async function CarausalBannerWrapper() {
    const movies = await getDiscoverMovies();


  return (
    <CarausalBanner movies={movies} />
  )
}

export default CarausalBannerWrapper