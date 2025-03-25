import React from "react";
import { getNowPlaying } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToWatchlist';
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";

const NowPlayingPage = (props) => {

    const { data, error, isPending, isError } = useQuery({
        queryKey: ['nowPlaying'],
        queryFn: getNowPlaying,
    })

    if (isPending) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    return (
        <PageTemplate
            title="In Cinemas Now"
            searchPrompt="Movies..."
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        {
                            movie.watchlist == true
                                ? (
                                    <RemoveFromWatchlist movie={movie} />
                                )
                                : <PlaylistAddIcon movie={movie} />
                        }
                    </>
                );
            }}
        />
    );
};
export default NowPlayingPage;