import styles from "./Informacoes.module.css";

export default function Informacoes({pokemon}) {
  return (
    <section className={styles.informacoes}>
      <div className={styles.tipos}>
        <h3>Tipos:</h3>
        <ul>
          {pokemon.types?.map((tipo) => (
            <li key={tipo.type.name}>{tipo.type.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.divisoria}></div>
      <div className={styles.medidas}>
        <h3>Medidas:</h3>
        <ul>
          <li>Peso: {pokemon.weight}</li>
          <li>Altura: {pokemon.height}</li>
        </ul>
      </div>
      <div className={styles.divisoria}></div>
      <div className={styles.habilidades}>
        <h3>Habilidades:</h3>
        <ul>
          {pokemon.abilities?.map((item) => (
            <li key={item.ability.name}>{item.ability.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
