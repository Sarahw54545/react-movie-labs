import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router";

export default function CastCard({cast}) {

  return (
    <Card sx={{ borderRadius: 5 }}>

      <CardMedia
        component="img"
        sx={{ objectFit: "contain" }}
        image={img} // To be replaced
        //   movie.poster_path
        //     ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        //     : img
        // }
        alt={`Cover Poster for ${cast.name}`}
      />

      <CardHeader sx={{ paddingBottom: 0 }}
        title={
          <Typography variant="h5" component="p">
            {cast.name}
          </Typography>
        }
      />

      {/* <CardContent sx={{ paddingTop: 0.5 }}>
        <Grid container>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h7" component="p">
              <CalendarIcon fontSize="small" sx={{ marginRight: 2 }} />
              {movie.release_date}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h7" component="p">
              <StarRateIcon fontSize="small" sx={{ marginRight: 2 }} />
              {movie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing sx={{ paddingTop: 0 }}>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info...
          </Button>
        </Link>
      </CardActions> */}
    </Card>
  );
}