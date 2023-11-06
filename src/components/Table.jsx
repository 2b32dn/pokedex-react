import React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { NumberPadding, Capitalize, Nidoran } from '../tools/tools';

const tableHeader = [
  {
    id: 1,
    key: "id",
    label: "#"
  },
  {
    id: 2,
    key: "name",
    label: "name"
  }
]

const tableStats = [
  {
    id: 1,
    key: "hp",
    label: "HP"
  },
  {
    id: 2,
    key: "atk",
    label: "Attack"
  },
  {
    id: 3,
    key: "def",
    label: "Defense"
  },
  {
    id: 4,
    key: "spatk",
    label: "Sp. Atk"
  },
  {
    id: 5,
    key: "spdef",
    label: "Sp. Def"
  },
  {
    id: 6,
    key: "spd",
    label: "Speed"
  }
]

const SortPokemonTable = (pokemon) => {
  const [sortedByField, setSortedByField] = useState({ id: 'id', direction: 'asc' });
  const sortedItems = useMemo(() => {
    let sortableItems = [...pokemon];
    if (sortedByField !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortedByField.id] < b[sortedByField.id]) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        }
        else if (a[sortedByField.id] > b[sortedByField.id]) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    if (sortedByField.id == 'hp') {
      sortableItems.sort((a, b) => {
        if (a.stats[0].base_stat < b.stats[0].base_stat) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        } else if (a.stats[0].base_stat > b.stats[0].base_stat) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        } return 0
      });
    }
    if (sortedByField.id == "atk") {
      sortableItems.sort((a, b) => {
        if (a.stats[1].base_stat < b.stats[1].base_stat) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        } else if (a.stats[1].base_stat > b.stats[1].base_stat) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        } return 0
      });
    }
    if (sortedByField.id == "def") {
      sortableItems.sort((a, b) => {
        if (a.stats[2].base_stat < b.stats[2].base_stat) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        } else if (a.stats[2].base_stat > b.stats[2].base_stat) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        } return 0
      });
    }
    if (sortedByField.id == "spatk") {
      sortableItems.sort((a, b) => {
        if (a.stats[3].base_stat < b.stats[3].base_stat) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        } else if (a.stats[3].base_stat > b.stats[3].base_stat) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        } return 0
      });
    }
    if (sortedByField.id == "spdef") {
      sortableItems.sort((a, b) => {
        if (a.stats[4].base_stat < b.stats[4].base_stat) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        } else if (a.stats[4].base_stat > b.stats[4].base_stat) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        } return 0
      });
    }
    if (sortedByField.id == "spd") {
      sortableItems.sort((a, b) => {
        if (a.stats[5].base_stat < b.stats[5].base_stat) {
          return sortedByField.direction === 'asc' ? -1 : 1;
        } else if (a.stats[5].base_stat > b.stats[5].base_stat) {
          return sortedByField.direction === 'asc' ? 1 : -1;
        } return 0
      });
    }
    return sortableItems;
  }, [pokemon, sortedByField]);

  const requestSort = (id) => {
    let direction = 'asc';
    if (
      sortedByField &&
      sortedByField.id === id &&
      sortedByField.direction === 'asc'
    ) {
      direction = 'desc';


    }
    setSortedByField({ id, direction });
  };

  return { pokemons: sortedItems, requestSort, sortedByField };
};

export function Table({ pokemon }) {
  const { pokemons, requestSort } = SortPokemonTable(pokemon);

  if (!pokemon) {
    return <></>
  }
  // console.log(pokemon)

  return (
    <table className="pkmn-c-table" >
      <thead className="pkmn-c-thead">
        <tr className='pkmn-c-tr'>
          {tableHeader.map((header, index) => (
            <th className='pkmn-c-th' key={index}>
              <button type="button" className='pkmn-c-btn pkmn-c-btn__header' onClick={() => requestSort(`${header.key}`)}>
                {header.label}
              </button>
            </th>
          ))}
          <th className='pkmn-c-th'>
            Type
          </th>
          {tableStats.map((header, index) => (
            <th className='pkmn-c-th' key={index}>
              <button type="button" className='pkmn-c-btn pkmn-c-btn__header' onClick={() => requestSort(`${header.key}`)}>
                {header.label}
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='pkmn-c-tbody'>
        {pokemons.map((pokemon) => (
          <>
            <tr key={pokemon.id} className='pkmn-c-tr'>
              <td className='pkmn-c-td'>
                <div className='pkmn-c-td__image'>
                  <img src={pokemon.sprites.versions["generation-viii"].icons.front_default} alt={`${pokemon.name} Sprite`} />
                  <span>
                    {NumberPadding(pokemon.id)}
                  </span>
                </div>
              </td>
              <td className='pkmn-c-td'>
                <Link to={`/pokemon/${pokemon.name}`}>
                  {Capitalize(Nidoran(pokemon.name))}
                </Link>
              </td>
              <td className='pkmn-c-td'>
                {pokemon.types.map(pkmn =>
                  <div className='pkmn-l-btn-container'>
                    <Link to={`/pokemon/type/${pkmn.type.name}`}>
                      <button className={`pkmn-c-btn pkmn-c-btn--${pkmn.type.name}`}>
                        {pkmn.type.name}
                      </button>
                    </Link>
                  </div>
                )}
              </td>
              {pokemon.stats.map(pkmn =>
                <td className='pkmn-c-td'>
                  {pkmn.base_stat}
                </td>
              )}
            </tr>
          </>
        ))}
      </tbody>
    </table >
  );
};