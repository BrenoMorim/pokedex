import styles from "./Cabecalho.module.css";
import BuscaInput from "components/BuscaInput";
import { Link } from "react-router-dom";
import Logo from "components/Logo";
import IconePikachu from "components/IconePikachu";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/" style={{textDecoration: "none"}}>
        <Logo tamanho="grande"/>
      </Link>
      <BuscaInput placeholder="Busque por um pokemon específico" />
      <IconePikachu tamanho="grande"/>
    </header>
  );
}
