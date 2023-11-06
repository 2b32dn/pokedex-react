import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Capitalize, NumberPadding, UrlRemover } from "../tools/tools";

export function EvolutionChain({ singlePokemonEvoChain, pokemon }) {
  // console.log(singlePokemonEvoChain)
  // console.log(pokemon)
  const { id } = useParams();
  const [pokemonEvoChain, setPokemonEvolChain] = useState();

  const fetchPokemonEvoChain = async () => {
    const response = await fetch(`${singlePokemonEvoChain}`)
    const data = await response.json()
    setPokemonEvolChain(data)
  }

  useEffect(() => {
    fetchPokemonEvoChain()
  }, []);

  if (!pokemon) {
    return <></>
  }

  if (!singlePokemonEvoChain) {
    return <>
    </>
  }

  // if (!pokemonEvoChain) {
  //   return <>
  //   </>
  // }

  function PokemonEvolutionChain({ pokemonEvoChain }) {
    if (!pokemonEvoChain) {
      return <>
      </>
    }

    const hasNoEvo = pokemonEvoChain.chain.evolves_to.length;
    const pokemonSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const pokemonChainSpecies = pokemonEvoChain.chain.species;
    const pokemonChainEvolvesTo = pokemonEvoChain.chain.evolves_to[0];

    // console.log(pokemonEvoChain.chain)

    if (hasNoEvo >= 1) {
      if (pokemonChainEvolvesTo.evolves_to.length >= 1) {

        return (
          (pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].min_level) ?
            <div>
              <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainSpecies.url)}.png`} alt={`${pokemonChainSpecies.name} Sprite`} />
              {/* {pokemonChainEvolvesTo.evolution_details[0].min_level} */}
              <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainEvolvesTo.species.url)}.png`} alt={`${pokemonChainEvolvesTo.species.name} Sprite`} />
              {/* {pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].min_level} */}
              <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainEvolvesTo.evolves_to[0].species.url)}.png`} alt={`${pokemonChainEvolvesTo.evolves_to[0].species.name} Sprite`} />
            </div>
            :
            <div>
              <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainSpecies.url)}.png`} alt={`${pokemonChainSpecies.name} Sprite`} />
              {/* {pokemonChainEvolvesTo.evolution_details[0].min_level} */}
              <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainEvolvesTo.species.url)}.png`} alt={`${pokemonChainEvolvesTo.species.name} Sprite`} />
              {/* {
                (pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].min_happiness) ? "High Friendship" : pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].item.name
                (pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].trigger.name) ? pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].trigger.name :
                pokemonChainEvolvesTo.evolves_to[0].evolution_details[0].item.name
              } */}
              {/* {console.log(pokemonChainEvolvesTo.evolves_to[0].evolution_details[0])} */}
              <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainEvolvesTo.evolves_to[0].species.url)}.png`} alt={`${pokemonChainEvolvesTo.evolves_to[0].species.name} Sprite`} />
            </div>
        )
      }

      if (pokemonEvoChain.chain.species.name == 'eevee') {
        return (
          pokemonEvoChain.chain.evolves_to.map(evo => {
            console.log(evo.species.name)
            console.log(evo.evolution_details[0])
          })
        )
      }

      return (
        <div>
          <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainSpecies.url)}.png`} alt={`${pokemonChainSpecies.name} Sprite`} />
          {/* {(pokemonChainEvolvesTo.evolution_details[0].min_level) ? pokemonChainEvolvesTo.evolution_details[0].min_level : pokemonChainEvolvesTo.evolution_details[0].item.name} */}
          <img src={`${pokemonSpriteUrl + UrlRemover(pokemonChainEvolvesTo.species.url)}.png`} alt={`${pokemonChainEvolvesTo.species.name} Sprite`} />
        </div>
      )
    } else {
      return (
        <div>
          {Capitalize(id)} does not evolve.
        </div>
      )
    }
  }


  return (
    <div className="pkmn-l-container">
      <PokemonEvolutionChain pokemonEvoChain={pokemonEvoChain} />
    </div>
  )
}