import styles from "./Carregando.module.css";

export default function Carregando() {

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Carregando...</h2>
      <div className={styles.loader}></div>
    </div>
  );
}