import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToWatchlist';
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";

const UpcomingMoviesPage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['discoverUpcomingMovies'],
    queryFn: getUpcomingMovies,
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
      title="Upcoming Movies"
      searchPrompt="Upcoming Movies..."
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
export default UpcomingMoviesPage;