import styles from "./Rodape.module.css";
import IconePikachu from "components/IconePikachu";
import Logo from "components/Logo";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <Logo tamanho="pequena" />
      <h3 className={styles.creditos}>Desenvolvido por Breno Morim em 2023</h3>
      <IconePikachu tamanho="pequeno"/>
    </footer>
  );
}
