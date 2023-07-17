import { useNavigate } from "react-router-dom";
import styles from "./CardPokemon.module.css";
import { useEffect } from "react";

export default function CardPokemon({ pokemon }) {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  }, []);

  const split = pokemon.url.split("/");
  const navigate = useNavigate();
  const id = split[split.length - 2];
  return (
    <article className={styles.card} onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
      <div
        className={styles.sprite}
        style={{
          backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png)`
        }}
      ></div>
      <p className={styles.nomePokemon}>{pokemon.name}</p>
    </article>
  );
}
