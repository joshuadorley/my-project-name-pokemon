import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import "./PokemonList.css";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ type: "", weakness: "" });

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data.pokemon))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredPokemon = pokemon.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (filters.type ? p.type.includes(filters.type) : true) &&
      (filters.weakness ? p.weaknesses.includes(filters.weakness) : true)
    );
  });

  return (
    <div className="pokemon-list">
      <h1>Pokemon Index</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
        />
        <select name="type" onChange={handleFilterChange} defaultValue="">
          <option value="">All Types</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          {/* Add more types as needed */}
        </select>
        <select name="weakness" onChange={handleFilterChange} defaultValue="">
          <option value="">All Weaknesses</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          {/* Add more weaknesses as needed */}
        </select>
      </div>
      <div className="pokemon-grid">
        {filteredPokemon.map((p) => (
          <PokemonCard key={p.num} pokemon={p} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
