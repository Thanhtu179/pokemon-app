import React from "react";
import { Detail, PokemonDetail } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: PokemonDetail[];
  viewDetial: Detail;
  setViewDetial: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetial, setViewDetial } = props;
  const selecPokemon = (id: number) => {
    if (!viewDetial.isOpened) {
      setViewDetial({
        id: id,
        isOpened: true,
      });
    }
  };
  return (
    <>
      <section
        className={
          viewDetial.isOpened
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {viewDetial.isOpened ? <div className="overlay"></div> : <div></div>}
        {pokemons.map((pokemon, index) => (
          <div onClick={() => selecPokemon(pokemon.id)} key={index}>
            <PokemonList
              name={pokemon.name}
              id={pokemon.id}
              abilities={pokemon.abilities}
              image={pokemon.sprites.front_default}
              viewDetial={viewDetial}
              setViewDetial={setViewDetial}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default PokemonCollection;
