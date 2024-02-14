import { SearchResults } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number){

    //set searchParams as we need
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 60 * 60 * 24, //cached passing time or default 24 hours
        }
    }
    const response = await fetch(url, options);
    const data = (await response.json()) as SearchResults

    return data;
}

export async function getMovies(url: URL) {
console.log(url,'************************************************')
}

export async function getUpComingMovies(){
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await fetchFromTMDB(url);
    // console.log(data.results,'999999999999999999999999999999999999999999')
    
    return data.results;
}
export async function getTopRatesMovies(){
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await fetchFromTMDB(url);
    // console.log(data.results,'999999999999999999999999999999999999999999')
    
    return data.results;
}
export async function getpopularMovies(){
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data = await fetchFromTMDB(url);
    // console.log(data.results,'999999999999999999999999999999999999999999')
    
    return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string){
    const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

    keywords &&  url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id);

   const data = await fetchFromTMDB(url);
   console.log(data.results,'&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7')
   return data.results;
}

//while searching a movie in search, pass that searched value as term and fetch that by passing the term as query
export async function getSearchMovies(term: string){
    const url = new URL('https://api.themoviedb.org/3/search/movie');

    url.searchParams.set('query', term);

    const data = await fetchFromTMDB(url);
    return data.results;
}