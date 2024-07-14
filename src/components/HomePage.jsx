import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const HomePage = ({
  characters,
  loading,
  totalPages,
  handlePageChange,
  page,
}) => {
  const [favoris, setFavoris] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const storedFavoris = JSON.parse(localStorage.getItem("favoris")) || [];
    setFavoris(storedFavoris);
  }, []);

  const handleClick = (id) => {
    setFavoris((prevFavoris) => {
      const updatedFavoris = prevFavoris.includes(id)
        ? prevFavoris.filter((favId) => favId !== id)
        : [...prevFavoris, id];

      localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
      return updatedFavoris;
    });
  };

  const handleCardClick = (character) => {
    navigate(`/detail/${character.id}`, { state: { character } });
  };

  if (loading) {
    return (
      <CircularProgress
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      />
    );
  }

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: 6,
        marginTop: 6,
      }}
    >
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <Card
            sx={{
              maxWidth: 345,
              minHeight: 650,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: theme.palette.card.main,
            }}
          >
            <div>
              <CardMedia
                component="img"
                height="100%"
                image={character.image}
                alt={character.name}
                onClick={() => handleCardClick(character)}
              />
              <CardContent onClick={() => handleCardClick(character)}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: theme.palette.secondary.main }}
                >
                  {character.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginTop={2}
                  marginBottom="8px"
                >
                  <span
                    style={{ fontWeight: 700, color: theme.palette.title.main }}
                  >
                    Status:
                  </span>{" "}
                  <span
                    style={{
                      color: theme.palette.secondary.main,
                      paddingLeft: "10px",
                    }}
                  >
                    {character.status}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom="8px"
                >
                  <span
                    style={{ fontWeight: 700, color: theme.palette.title.main }}
                  >
                    Species:
                  </span>{" "}
                  <span
                    style={{
                      color: theme.palette.secondary.main,
                      paddingLeft: "10px",
                    }}
                  >
                    {character.species}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom="8px"
                >
                  <span
                    style={{ fontWeight: 700, color: theme.palette.title.main }}
                  >
                    Gender:{" "}
                  </span>
                  <span
                    style={{
                      color: theme.palette.secondary.main,
                      paddingLeft: "10px",
                    }}
                  >
                    {character.gender}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom="8px"
                >
                  <span
                    style={{ fontWeight: 700, color: theme.palette.title.main }}
                  >
                    Origin:{" "}
                  </span>{" "}
                  <span
                    style={{
                      color: theme.palette.secondary.main,
                      paddingLeft: "10px",
                    }}
                  >
                    {character.origin.name}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom="8px"
                >
                  <span
                    style={{ fontWeight: 700, color: theme.palette.title.main }}
                  >
                    Location:
                  </span>{" "}
                  <span
                    style={{
                      color: theme.palette.secondary.main,
                      paddingLeft: "10px",
                    }}
                  >
                    {character.location.name}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  marginBottom="8px"
                >
                  Appeared in{" "}
                  <span
                    style={{ fontWeight: 700, color: theme.palette.title.main }}
                  >
                    {character.episode.length}
                  </span>{" "}
                  episodes
                </Typography>
              </CardContent>
            </div>
            <CardActions
              disableSpacing
              sx={{
                backgroundColor: theme.palette.card.main,
                marginTop: "auto",
              }}
            >
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleClick(character.id)}
              >
                <FavoriteIcon
                  sx={{
                    color: favoris.includes(character.id) ? "red" : "default",
                  }}
                />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Stack spacing={2} marginTop={4}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
         
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white', 
            },
            '& .MuiPaginationItem-page.Mui-selected': {
              color: theme.palette.title.main, 
            },
            '& .MuiPaginationItem-page:hover': {
              color: theme.palette.title.main, 
            }
          }}
        />
      </Stack>
    </Grid>
  );
};

export default HomePage;
