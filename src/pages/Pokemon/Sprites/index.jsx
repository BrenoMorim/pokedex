import styles from "./Sprites.module.css";

export default function Sprites({ pokemon }) {
  return (
    <section className={styles.sprites}>
      <img
        className={styles.sprite}
        src={pokemon.sprites?.front_default}
        alt={`Imagem da versão padrão do ${pokemon.name}`}
      />
      <img
        className={styles.sprite}
        src={pokemon.sprites?.front_shiny}
        alt=""
        onError={(event) => {event.target.style.display = 'none';}}
      />
    </section>
  );
}
