import React, { useState, useEffect } from "react";
import HomePage from "../components/HomePage";
import { Filters } from "../components/Filters";
import axios from "axios";

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const fetchTotalPages = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character`);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error("Error fetching total pages:", error);
      }
    };

    fetchTotalPages();
  }, []);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      let allCharacters = [];
      try {
        for (let i = 1; i <= totalPages; i++) {
          const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
          allCharacters = [...allCharacters, ...response.data.results];
        }
        setCharacters(allCharacters);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    if (totalPages > 1) {
      fetchAllCharacters();
    }
  }, [totalPages]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = characters.slice(); 

      if (name) {
        filtered = filtered.filter((character) =>
          character.name.toLowerCase().includes(name.toLowerCase())
        );
      }

      if (status) {
        filtered = filtered.filter((character) => character.status === status);
      }

      if (species) {
        filtered = filtered.filter((character) => character.species === species);
      }

      if (gender) {
        filtered = filtered.filter((character) => character.gender === gender);
      }

      setFilteredCharacters(filtered);
    };

    applyFilters();
  }, [characters, name, status, species, gender]);

  useEffect(() => {
    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedCharacters(filteredCharacters.slice(startIndex, endIndex));
  }, [filteredCharacters, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const searchByName = (event) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSearch = () => {
    setPage(1);
  };

  const handleReset = () => {
    setName("");
    setSpecies("");
    setStatus("");
    setGender("");
  };

  return (
    <>
      <Filters
        searchByName={searchByName}
        name={name}
        status={status}
        species={species}
        handleSpeciesChange={handleSpeciesChange}
        handleStatusChange={handleStatusChange}
        handleGenderChange={handleGenderChange}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <HomePage
        characters={displayedCharacters}
        loading={loading}
        totalPages={Math.ceil(filteredCharacters.length / 20)} 
        page={page}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default MainPage;
