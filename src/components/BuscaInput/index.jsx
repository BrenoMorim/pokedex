import styles from "./BuscaInput.module.css";
import {ReactComponent as Search} from "./search.svg";

export default function BuscaInput({placeholder}) {
  return (
    <div className={styles.buscaContainer}>
      <input
        className={styles.buscaInput}
        type="text"
        placeholder={placeholder}
      />
      <button type="submit" className={styles.botaoBusca}>
        <Search
          className={styles.iconeSearch}
          aria-label="Buscar"
          onClick={() => {}}
        />
      </button>
    </div>
  );
}
