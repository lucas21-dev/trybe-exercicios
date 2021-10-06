import React from "react";
import pokemons from "./data";
import Pokemon from "./pokelist";

class Pokedex extends React.Component {
  render() {
    return (
      pokemons.map((pokeData) => {
        return <Pokemon poke={pokeData} key={pokeData.id}/>
      })
    )
  }
}

export default Pokedex;