import styles from "./Cabecalho.module.css";
import pokebola from "./pokebola.png";
import pikachu from "./pikachu.png";
import BuscaInput from "components/BuscaInput";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/" style={{textDecoration: "none"}}>
        <div className={styles.texto}>
          <img src={pokebola} alt="" aria-hidden className={styles.imagem} />
          <h2 className={styles.titulo}>Pokedéx</h2>
        </div>
      </Link>
      <BuscaInput placeholder="Busque por um pokemon específico" />
      <img
        className={styles.icone}
        src={pikachu}
        alt="Foto do rosto do pikachu, extraído de um dos jogos"
      />
    </header>
  );
}
