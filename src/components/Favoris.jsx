import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

export default function Favoris() {
  const [favoris, setFavoris] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavoris = JSON.parse(localStorage.getItem("favoris")) || [];
    setFavoris(storedFavoris);

    const fetchFavoris = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          storedFavoris.map((id) =>
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
          )
        );
        const data = await Promise.all(responses.map((res) => res.json()));
        setCharacters(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchFavoris();
  }, []);

  const handleRemoveFavori = (id) => {
    const updatedFavoris = favoris.filter(favId => favId !== id);
    setFavoris(updatedFavoris);
    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
    setCharacters(characters.filter(character => character.id !== id));
  };

  if (loading) {
    return <CircularProgress sx={{display:'flex',justifyContent:'center', alignContent:'center'}}/>;
  }


  const handleCardClick = (character) => {
    navigate(`/detail/${character.id}`, { state: { character } });
  };


  return (
    <Grid container spacing={3} justifyContent="center">
      {characters.map((character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <Card sx={{ maxWidth: 345 }} >
            <CardMedia
              component="img"
              height="100%"
              image={character.image}
              alt={character.name}
              
              onClick={() => handleCardClick(character)}
            />
            <CardContent 
              onClick={() => handleCardClick(character)}>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {character.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {character.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gender: {character.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Origin: {character.origin.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: {character.location.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Appeared in {character.episode.length} episodes
              </Typography>
             
            </CardContent>
            <Button
                variant="outlined"
                sx={{ marginTop: 2, display: 'flex', alignContent: 'center', gap: 2, margin:2 }}
                onClick={() => handleRemoveFavori(character.id)}
              >
                Retirer des favoris
               
              </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
