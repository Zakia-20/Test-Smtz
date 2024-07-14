import React from "react";
import { Grid, Typography, Card, CardContent, Rating } from "@mui/material";
import { useLocation } from "react-router-dom";

export const CharacterDetail = () => {
  const location = useLocation();
  const character = location.state.character;

  const [value, setValue] = React.useState(2);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "98%",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginRight: 2,
        marginLeft: "5px",
        overflow: "hidden",
      }}
    >
      <Grid item xs={12} md={4}>
        <img
          src={character.image}
          alt="pic"
          style={{ width: "100%", borderRadius: "5px" }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Card sx={{ boxShadow: "none" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {character.name}
            </Typography>
            <Rating
              sx={{ marginTop: "10px" }}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            {/* Character details */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              <span style={{ fontWeight: 700 }}>Status:</span>{" "}
              {character.status}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              <span style={{ fontWeight: 700 }}>Species:</span>{" "}
              {character.species}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              <span style={{ fontWeight: 700 }}>Gender:</span>{" "}
              {character.gender}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              <span style={{ fontWeight: 700 }}>Origin:</span>{" "}
              {character.origin.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              <span style={{ fontWeight: 700 }}>Location:</span>{" "}
              {character.location.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              Appeared in{" "}
              <span style={{ fontWeight: 700 }}>
                {character.episode.length}
              </span>{" "}
              episodes
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
