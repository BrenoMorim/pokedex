import styles from "./Botao.module.css";

export default function Botao({children, onClick, tamanhoFonte="2rem"}) {
  return (
    <button className={styles.botao} onClick={onClick} style={{fontSize: tamanhoFonte}}>
      {children}
    </button>
  );
}