import CardPokemon from "components/CardPokemon";
import styles from "./ListaPokemons.module.css";
import Carregando from "components/Carregando";

export default function ListaPokemons({ pokemons }) {
  return (
    <section className={`${styles.lista} animate__animated animate__bounceIn`}>
      {pokemons.length > 0 ? pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.name} pokemon={pokemon} />
      )) : <Carregando/>}
    </section>
  );
}
