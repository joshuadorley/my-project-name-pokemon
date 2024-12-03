import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:num" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
