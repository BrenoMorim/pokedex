import styles from "./CardPokemon.module.css";

export default function CardPokemon({ pokemon }) {
  const split = pokemon.url.split("/");
  const id = split[split.length - 2];
  return (
    <article className={styles.card}>
      <div
        className={styles.sprite}
        style={{
          backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg)`
        }}
      ></div>
      <p className={styles.nomePokemon}>{pokemon.name}</p>
    </article>
  );
}
