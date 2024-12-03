import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetails = () => {
  const { num } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedPokemon = data.pokemon.find((p) => p.num === num);
        setPokemon(selectedPokemon);
      })
      .catch((error) => console.error(error));
  }, [num]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Number: {pokemon.num}</p>
      <p>Type: {pokemon.type.join(", ")}</p>
      <p>Weaknesses: {pokemon.weaknesses.join(", ")}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {pokemon.next_evolution && (
        <div>
          <h3>Next Evolutions</h3>
          {pokemon.next_evolution.map((evo) => (
            <p key={evo.num}>
              <a href={`/pokemon/${evo.num}`}>{evo.name}</a>
            </p>
          ))}
        </div>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default PokemonDetails;
