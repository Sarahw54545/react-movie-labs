import React, { useState } from "react";
import HeroBanner from "../heroBanner";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
// import Header from "../headerMovieList";
// import FilterCard from "../filterMoviesCard";          - No Longer Used (Replaced by Hero Banner)

function MovieListPageTemplate({ movies, title, action, searchPrompt }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

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
        {/* <Header title={title} /> */}
      </Grid>
      
        {/* <Grid                        - No Longer Used - Replaced by Hero Banner
          key="find"
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          sx={{ padding: "20px" }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
          
        </Grid> */}
      {/* </Grid> */}

      <MovieList action={action} movies={displayedMovies}></MovieList>
    </Grid>
  );
}
export default MovieListPageTemplate;