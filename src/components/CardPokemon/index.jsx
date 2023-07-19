import { Link } from "react-router-dom";
import styles from "./CardPokemon.module.css";

export default function CardPokemon({ pokemon }) {

  const split = pokemon.url.split("/");
  const id = split[split.length - 2];
  return (
    <Link to={`/pokemon/${pokemon.name}`} style={{textDecoration: "none"}}>
      <article className={styles.card}>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
          alt={`Sprite oficial do pokémon ${pokemon.name}`}
          className={styles.sprite}
        />
        <p className={styles.nomePokemon}>{pokemon.name}</p>
      </article>
    </Link>
  );
}
