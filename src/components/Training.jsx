import { Link, useParams } from "react-router-dom";
import { Capitalize } from "../tools/tools";

export function Training({ singlePokemon, singlePokemonSpecies }) {
  // console.log(singlePokemon)
  console.log(singlePokemonSpecies)

  const stats = singlePokemon.stats;
  const evYield = (stat) => {
    if (stat.effort > 0) {
      return stat.effort
    }
  }
  const evs = stats.filter(evYield);
  console.log(evs)

  const maleRatio = (num) => {
    return (1 - (num / 8)) * 100
  }

  const femaleRatio = (num) => {
    return 100 - ((1 - (num / 8)) * 100)
  }

  return (
    <div>
      <h2>Training / Breeding</h2>
      <table>
        <tbody>
          <tr>
            <th>
              Egg Group
            </th>
            <td>
              {singlePokemonSpecies.egg_groups.map(group => (
                <span>
                  {group.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>
              Catch rate
            </th>
            <td>
              {singlePokemonSpecies.capture_rate}
            </td>
          </tr>
          <tr>
            <th>
              Base Exp.
            </th>
            <td>
              {singlePokemon.base_experience}
            </td>
          </tr>
          <tr>
            <th>
              Gender
            </th>
            <td>
              <span>
                {maleRatio(singlePokemonSpecies.gender_rate)}% male,
              </span>
              <span>
                {femaleRatio(singlePokemonSpecies.gender_rate)}% female
              </span>
            </td>
          </tr>
          <tr>
            <th>
              EV Yield
            </th>
            <td>
              {evs.map(ev => (
                <>
                  <span>
                    {ev.effort}
                  </span>
                  <span>
                    {ev.stat.name}
                  </span>
                </>
              ))}
            </td>
          </tr>
          <tr>
            <th>
              Egg Cycles
            </th>
            <td>
              {singlePokemonSpecies.hatch_counter}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}