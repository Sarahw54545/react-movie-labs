import React, { useState } from "react";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../spinner';
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const formControl =
{
    margin: 1,
    backgroundColor: "rgb(255, 255, 255)"
};

export default function heroBanner(props) {

    const { data, error, isPending, isError } = useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
    });

    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    const genres = data.genres;
    if (genres[0].name !== "All") {
        genres.unshift({ id: "0", name: "All" });
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = (e, props) => {
        handleChange(e, "name", e.target.value);
    };

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value);
    };

    return (
        <>
            <Container sx={
                {
                    backgroundColor: "red",
                    justifyContent: "space-around",
                    paddingTop: 1,
                    marginBottom: 1.5,
                    textAlign: "center",
                }
            }>

                <h1>{props.title}</h1>

                <TextField
                    sx={{ ...formControl,
                        minWidth: "50%",
                     }}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    value={props.titleFilter}
                    onChange={handleTextChange}
                />
                <FormControl sx={{ ...formControl, minWidth: "25%"}}>

                <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre-select"
                        defaultValue=""
                        value={props.genreFilter}
                        onChange={handleGenreChange}
                    >

                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Container>
        </>
    );
};