import { getDiscoverMovies } from "@/lib/getMovies"
import CarausalBanner from "./CarausalBanner";

type Props = {
    id? : string,
    keywords: string,
}
async function CarausalBannerWrapper({id, keywords}: Props) {
    const movies = await getDiscoverMovies(id, keywords);


  return (
    <CarausalBanner movies={movies} />
  )
}

export default CarausalBannerWrapper