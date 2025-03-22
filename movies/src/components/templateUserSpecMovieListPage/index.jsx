import React, { useState, useContext } from "react";
import HeroBanner from "../heroBanner";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import { MoviesContext } from "../../contexts/moviesContext";
import EmptyPrompt from "../emptyPrompt"



function ActionedMovieListPageTemplate({ movies, title, action, searchPrompt, isEmpty, emptyPrompt, buttonPrompt, link }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  // const { favorites: favouritesExist } = useContext(MoviesContext);
  // const { watchlist: watchlistExists } = useContext(MoviesContext);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <HeroBanner
          title={title}
          searchPrompt={searchPrompt}
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter} />
      </Grid>

      {/* {favouritesExist == 0
        ? <Container sx={{ textAlign: "center" }}>
          <h2>Currently No Favourited Movies....</h2>
          <Link to={`/`}>
            <Button variant="contained" size="medium" color="primary">
              Back to Home
            </Button>
          </Link>
        </Container>

        : <MovieList action={action} movies={displayedMovies}></MovieList>
      }


      {watchlistExists == 0
        ? <Container sx={{ textAlign: "center" }}>
          <h2>Currently No Movies on Watchlist....</h2>
          <Link to={`/movies/upcoming`}>
            <Button variant="contained" size="medium" color="primary">
              Add Some Movies From Here
            </Button>
          </Link>
        </Container>

        : <MovieList action={action} movies={displayedMovies}></MovieList>
      } */}

      {isEmpty === true
      ? <EmptyPrompt emptyPrompt={emptyPrompt} buttonPrompt={buttonPrompt} link={link}></EmptyPrompt>
    : <MovieList action={action} movies={displayedMovies}></MovieList>
    }
    </Grid >
  );
}
export default ActionedMovieListPageTemplate;