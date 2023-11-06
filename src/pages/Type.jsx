import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function Type({ }) {
  const { id } = useParams();
  const SINGLE_PKMN_TYPE = "https://pokeapi.co/api/v2/type/";

  const [type, setType] = useState();
  const fetchType = async () => {
    const response = await fetch(`${SINGLE_PKMN_TYPE + id}`);
    const data = await response.json();
    setType(data)
  };

  console.log(type)

  useEffect(() => {
    fetchType()
  }, []);

  if (!type) {
    return <></>
  }

  return (
    <>
      <h1>
        {id}'s Page
      </h1>
      {type.name}
    </>
  )
}