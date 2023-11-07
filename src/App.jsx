import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/scss/core.scss";
import Main from "./components/Main";
import { SinglePokemonPage } from "./pages/SinglePokemonPage.jsx";
import { Type } from "./pages/Type.jsx";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPokemons(data.results);

    const pokemonUrls = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonUrl = await fetch(pokemon.url);
        const responseEachUrl = await pokemonUrl.json();

        return responseEachUrl;
      })
    );
    setPokemon(pokemonUrls);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main pokemon={pokemon} />} />
      <Route
        path={`/pokemon/:id`}
        element={<SinglePokemonPage pokemon={pokemon} />}
      />
      <Route path={`/pokemon/type/:id`} element={<Type />} />
    </Routes>
  );
}

export default App;
