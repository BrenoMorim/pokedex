import Tipo from "components/Tipo";
import styles from "./Informacoes.module.css";

export default function Informacoes({pokemon}) {
  return (
    <section className={styles.informacoes}>
      <div className={styles.tipos}>
        <h3>Tipos</h3>
        <div className={styles.dados}>
          {pokemon.types?.map((tipo) => (
            <Tipo key={tipo.type.name} nomeTipo={tipo.type.name}/>
          ))}
        </div>
      </div>
      <div className={styles.divisoria}></div>
      <div className={styles.medidas}>
        <h3>Medidas</h3>
        <div className={styles.dados}>
          <span>Peso: {pokemon.weight}</span>
          <span>Altura: {pokemon.height}</span>
        </div>
      </div>
      <div className={styles.divisoria}></div>
      <div className={styles.habilidades}>
        <h3>Habilidades</h3>
        <div className={styles.dados}>
          {pokemon.abilities?.map((item) => (
            <span key={item.ability.name}>{item.ability.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
