import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  const futureFlags = { v7_startTransition: true }; // Enabling the flag

  return (
    <Router futureFlags={futureFlags}>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:num" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
