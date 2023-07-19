import pokebola from "./pokebola.png";
import styles from "./Logo.module.css";

export default function Logo({tamanho='grande'}) {
  return (
    <div className={`${styles.logo} ${styles[tamanho]} animate__animated animate__bounceInDown`}>
      <img src={pokebola} alt="" aria-hidden className={`${styles.imagem} ${styles[tamanho]}`} />
      <h3 className={`${styles.texto} ${styles[tamanho]}`}>Pokédex</h3>
    </div>
  );
}