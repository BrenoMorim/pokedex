import styles from "./Carregando.module.css";

export default function Carregando() {

  return (
    <div className={`${styles.container} animate__animated animate__bounceIn`}>
      <h2 className={styles.titulo}>Carregando...</h2>
      <div className={styles.loader}></div>
    </div>
  );
}