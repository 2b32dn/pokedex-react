import { Link, useParams } from "react-router-dom";
import { Capitalize, NumberPadding, UrlRemover, MinEv, MaxEv, MaxHP, MinHP } from "../tools/tools";

export function BaseStats({ singlePokemon }) {
  // console.log(singlePokemon)

  const stats = singlePokemon.stats
  const arr = [];
  const sum = (total, num) => {
    return total + num;
  }
  stats.map(stat => arr.push(stat.base_stat))
  const totalBaseStat = arr.reduce(sum)

  return (
    <div>
      <h2>Base Stats</h2>
      <table>
        <tbody>
          {stats.slice(0, 1).map(stat => {
            return (
              <tr key={stat.stat.name}>
                <th>{Capitalize(stat.stat.name)}</th>
                <td>{stat.base_stat}</td>
                <td>
                  <label htmlFor={stat.stat.name} className="pkmn-is-not-active">Stat progress bar</label>
                  <progress id={stat.stat.name} value={(stat.base_stat / 120) * 120} max="120"></progress>
                </td>
                <td>{MinHP(stat.base_stat)}</td>
                <td>{MaxHP(stat.base_stat)}</td>
              </tr>
            )
          })}
          {stats.slice(1).map(stat => {
            return (
              <tr key={stat.stat.name}>
                <th>{Capitalize(stat.stat.name)}</th>
                <td>{stat.base_stat}</td>
                <td>
                  <label htmlFor={stat.stat.name} className="pkmn-is-not-active">Stat progress bar</label>
                  <progress id={stat.stat.name} value={(stat.base_stat / 120) * 120} max="120"></progress>
                </td>
                <td>{MinEv(stat.base_stat)}</td>
                <td>{MaxEv(stat.base_stat)}</td>
              </tr>
            )
          })}
          <tr>
            <th>Total</th>
            <td>{totalBaseStat}</td>
            <td></td>
            <td>Min</td>
            <td>Max</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}