import CardPokemon from "components/CardPokemon";
import styles from "./ListaPokemons.module.css";

export default function ListaPokemons({ pokemons }) {
  return (
    <section className={styles.lista}>
      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
}
