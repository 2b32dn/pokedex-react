import { Capitalize, NumberPadding } from "../tools/tools";

export function PokedexEntries({ singlePokemon, singlePokemonSpecies }) {

  const flavorTextEntries = singlePokemonSpecies.flavor_text_entries;
  // console.log(flavorTextEntries)

  function removeDuplicatesBy(keyFn, array) {
    let mySet = new Set();
    return array.filter(function (x) {
      let key = keyFn(x), isNew = !mySet.has(key)

      if (isNew) mySet.add(key)
      return isNew
    })
  }

  let withoutDuplicates = removeDuplicatesBy(x => x.flavor_text, flavorTextEntries)

  const Version = [
    {
      'version-1': 'red',
      'version-2': 'blue'
    },
    {
      'version-1': 'yellow',
    },
    {
      'version-1': 'gold',
    },
    {
      'version-1': 'silver',
    },
    {
      'version-1': 'crystal',
    },
    {
      'version-1': 'ruby',
      'version-2': 'sapphire',
    },
    {
      'version-1': 'fire red',
    },
    {
      'version-1': 'leaf green',
    },
    {
      'version-1': 'emerald',
    },
    {
      'version-1': 'diamond',
      'version-2': 'pearl',
      'version-3': 'platinum'
    },
    {
      'version-1': 'heart gold',
    },
    {
      'version-1': 'soul silver',
    },
    {
      'version-1': 'black',
      'version-2': 'white',
      'version-3': 'black 2',
      'version-4': 'white 2'
    },
    {
      'version-1': 'x',
    },
    {
      'version-1': 'y',
    },
    {
      'version-1': 'ruby',
      'version-2': 'sapphire',
    },
    {
      'version-1': 'omega ruby',
      'version-2': 'alpha sapphire',
    },
    {
      'version-1': "let's go pikachu",
      'version-2': "let's go eevee",
    },
    {
      'version-1': 'sword',
    },
    {
      'version-1': 'shield',
    },
    {
      'version-1': "brilliant diamond",
      'version-2': "shining pearl",
    }
  ]
  // Version.map(x => {
  //   if (Object.keys(x).length > 1) {
  //     console.log(typeof (x))
  //   }
  // })

  console.log(Version.length)

  return (
    <>
      <div>
        <table className="pkmn-c-table pkmn-c-table--border-none">
          <tbody>
            {withoutDuplicates.map(entry => {
              if (entry.language.name == 'en') {
                console.log(entry.length)
                return (
                  <tr>
                    <th>

                    </th>
                    <td>
                      {entry.flavor_text}
                    </td>
                  </tr>
                )
              }
            })}
            <div>
              {flavorTextEntries.map(x => {
                if (x.language.name == 'en') {
                  return (
                    <div>
                      {x.version.name}
                    </div>
                  )
                }
              })}
            </div>
          </tbody>
        </table>
      </div>
    </>
  )
}