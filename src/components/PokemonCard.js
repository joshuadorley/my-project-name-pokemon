import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <p>Number: {pokemon.num}</p>
      <p>Type: {pokemon.type.join(", ")}</p>
      <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
      <Link to={`/pokemon/${pokemon.num}`}>View Details</Link>
    </div>
  );
};

export default PokemonCard;
