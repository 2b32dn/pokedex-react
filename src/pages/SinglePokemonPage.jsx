import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Capitalize, NumberPadding } from "../tools/tools";
import { EvolutionChain } from "../components/EvolutionChain";
import { BasicInformation } from "../components/BasicInformation";
import { BaseStats } from "../components/BaseStats";
import { Training } from "../components/Training";
import { PokedexEntries } from "../components/PokedexEntries";

export function SinglePokemonPage({ pokemon }) {
  const { id } = useParams();
  const SINGLE_PKMN_API = "https://pokeapi.co/api/v2/pokemon/";
  const SINGLE_PKMN_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

  const [singlePokemon, setSinglePokemon] = useState();
  const [singlePokemonSpecies, setSinglePokemonSpecies] = useState();
  const [singlePokemonEvoChain, ssetSinglePokemonEvoChain] = useState();

  const fetchSinglePokemon = async () => {
    const response = await fetch(`${SINGLE_PKMN_API + id}`);
    const data = await response.json();
    setSinglePokemon(data)
  };

  // console.log(singlePokemon)

  const fetchSinglePokemonSpecies = async () => {
    const response = await fetch(`${SINGLE_PKMN_SPECIES + id}`);
    const data = await response.json();
    const evo_chain = data.evolution_chain.url
    setSinglePokemonSpecies(data)
    ssetSinglePokemonEvoChain(evo_chain)
  };

  // console.log(singlePokemonSpecies)
  // console.log(singlePokemonEvoChain)

  useEffect(() => {
    fetchSinglePokemon();
    fetchSinglePokemonSpecies();
  }, []);

  if (!singlePokemon) {
    return <></>
  }

  if (!singlePokemonSpecies) {
    return <></>
  }

  return (
    <div className="pkmn-l-container">
      <div className="pkmn-l-flex">
        <BasicInformation singlePokemon={singlePokemon} singlePokemonSpecies={singlePokemonSpecies} />
        <img src={singlePokemon.sprites.other["official-artwork"].front_default} alt={`${singlePokemon.name}`} />
        <EvolutionChain singlePokemonEvoChain={singlePokemonEvoChain} pokemon={singlePokemon} />÷
      </div>
      <div className="pkmn-l-flex">
        <BaseStats singlePokemon={singlePokemon} />
        <Training singlePokemon={singlePokemon} singlePokemonSpecies={singlePokemonSpecies} />
      </div>
      <div className="pkmn-l-flex">
        <PokedexEntries singlePokemon={singlePokemon} singlePokemonSpecies={singlePokemonSpecies} />
      </div>
    </div>
  )
}