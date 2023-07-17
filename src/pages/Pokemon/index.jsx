import styles from "./Pokemon.module.css";
import { buscarPokemonPorNome } from "http";
import PaginaErro from "pages/PaginaErro";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sprites from "./Sprites";
import Informacoes from "./Informacoes";
import ListaPokemons from "components/ListaPokemons";
import { listarPokemons } from "http";

export default function Pokemon() {

  
  const { nome } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokemonsRelacionados, setPokemonsRelacionados] = useState([]);
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, [nome]);

  useEffect(() => {
    async function buscar() {
      try {
        const pokemonEncontrado = await buscarPokemonPorNome(nome);
        setPokemon(pokemonEncontrado);
        let idInicial = (pokemonEncontrado.id - 6)
        if (idInicial < 0) {
          idInicial = pokemonEncontrado.id;
        }
        setPokemonsRelacionados((await listarPokemons(idInicial, 5)).results);
      } catch(e) {
        setPokemon({erro: true});
      }
    }
    buscar();
  }, [nome]);
  if (pokemon.erro) {
    return <PaginaErro pokemon={nome}/>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>#{pokemon.id} - {pokemon.name}</h1>
      <div className={styles.sectionsContainer}>
        <Sprites pokemon={pokemon}/>
        <Informacoes pokemon={pokemon}/>
      </div>
      <h2 className={styles.titulo}>Pokemóns próximos na pokedex:</h2>
      <ListaPokemons pokemons={pokemonsRelacionados}/>
    </main>
  );
}
