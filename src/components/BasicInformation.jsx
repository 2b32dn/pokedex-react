import { Link, useParams } from "react-router-dom";
import { Capitalize, NumberPadding, KilogramToPoundConverter, MeterToFeetConverter } from "../tools/tools";

export function BasicInformation({ singlePokemonSpecies, singlePokemon }) {
  // console.log(singlePokemon.abilities)
  // console.log(singlePokemonSpecies.genera)
  // console.log(singlePokemon)

  return (
    <table className="pkmn-c-table">
      <tbody className='pkmn-c-tbody'>
        <tr className="pkmn-c-tr">
          <th>National #</th>
          <td>
            <strong>
              {NumberPadding(singlePokemon.id)}
            </strong>
          </td>
        </tr>
        <tr className="pkmn-c-tr">
          <th>Type</th>
          <td>
            <div className="pkmn-l-flex pkmn-l-flex--row-gap">
              {singlePokemon.types.map(types => (
                <Link to={`/pokemon/type/${types.type.name}`}>
                  <button className={`pkmn-c-btn pkmn-c-btn--${types.type.name}`}>
                    {types.type.name}
                  </button>
                </Link>
              ))}
            </div>
          </td>
        </tr>
        <tr className="pkmn-c-tr">
          <th>Species</th>
          <td>
            {singlePokemonSpecies.genera.map(genus => {
              if (genus.language.name == "en") {
                return <span>
                  {genus.genus}
                </span>
              }
            })}
          </td>
        </tr>
        <tr className="pkmn-c-tr">
          <th>Height</th>
          <td>
            {singlePokemon.height / 10 + " m"}
            &nbsp;
            ({MeterToFeetConverter(singlePokemon.weight / 10)})
          </td>
        </tr>
        <tr className="pkmn-c-tr">
          <th>Weight</th>
          <td>
            {singlePokemon.weight / 10 + " kg"}
            &nbsp;
            ({KilogramToPoundConverter(singlePokemon.weight / 10) + " lbs"})
          </td>
        </tr>
        <tr className="pkmn-c-tr">
          <th>Abilities</th>
          <td>
            <div className="pkmn-l-flex pkmn-l-flex--column">
              {singlePokemon.abilities.map(ability => {
                if (!ability.is_hidden) {
                  return (
                    <span className="pkmn-c-tr__ability">{Capitalize(ability.ability.name)}</span>
                  )
                } else {
                  return <span className="pkmn-c-tr__ability-hidden">{Capitalize(ability.ability.name) + " (hidden ability)"}</span>
                }
              }
              )}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}