import styles from "./Stats.module.css";

export default function Stats({ stats }) {
  return (
    <section className={styles.stats}>
      <h3 className={styles.titulo}>Atributos</h3>
      <div className={styles.statsTabela}>
        {stats.map(dados => (
          <div className={styles.stat} key={dados.stat.name}>
            <span className={styles.statNome}>{dados.stat.name}</span>
            <span className={styles.statValor}>{dados.base_stat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}