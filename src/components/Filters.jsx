import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReplayIcon from "@mui/icons-material/Replay";
import { useTheme } from "@mui/material/styles";

export const Filters = ({
  searchByName,
  name,
  status,
  species,
  gender,
  handleStatusChange,
  handleSpeciesChange,
  handleGenderChange,
  handleReset,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        marginBottom: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          width: "100%",
        }}
      >
        <Typography variant="body2">Search by:</Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={searchByName}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        />

        <Box sx={{ minWidth: 200, width: { xs: "100%", sm: "auto" } }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={status}
              onChange={handleStatusChange}
              label="Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Alive">Alive</MenuItem>
              <MenuItem value="Dead">Dead</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 200, width: { xs: "100%", sm: "auto" } }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="species-select-label">Species</InputLabel>
            <Select
              labelId="species-select-label"
              id="species-select"
              value={species}
              onChange={handleSpeciesChange}
              label="Species"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Alien">Alien</MenuItem>
              <MenuItem value="Human">Human</MenuItem>
              <MenuItem value="Humanoid">Humanoid</MenuItem>
              <MenuItem value="Mythological Creature">
                Mythological Creature
              </MenuItem>
              <MenuItem value="Robot">Robot</MenuItem>
              <MenuItem value="Disease">Disease</MenuItem>
              <MenuItem value="Poopybutthole">Poopybutthole</MenuItem>
              <MenuItem value="Animal">Animal</MenuItem>
              <MenuItem value="Cronenberg">Cronenberg</MenuItem>
              <MenuItem value="unknown">Unknown</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 200, width: { xs: "100%", sm: "auto" } }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              value={gender}
              onChange={handleGenderChange}
              label="Gender"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Genderless">Genderless</MenuItem>
              <MenuItem value="unknown">unknown</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "auto" }, display: 'flex', justifyContent: { xs: "center", sm: "flex-end" } }}>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
            border: "1px solid",
            padding: "10px",
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleReset}
        >
          Reset
          <ReplayIcon />
        </Typography>
      </Box>
    </Box>
  );
};
