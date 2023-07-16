import { useState } from "react";
import styles from "./BuscaInput.module.css";
import {ReactComponent as Search} from "./search.svg";
import { useNavigate } from "react-router-dom";

export default function BuscaInput({placeholder}) {

  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  return (
    <form className={styles.buscaContainer} onSubmit={(event) => {
      event.preventDefault();
      navigate(`/pokemon/${busca.toLowerCase()}`);
      setBusca("");
    }}>
      <input
        className={styles.buscaInput}
        type="text"
        placeholder={placeholder}
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        required
      />
      <button type="submit" className={styles.botaoBusca}>
        <Search
          className={styles.iconeSearch}
          aria-label="Buscar"
        />
      </button>
    </form>
  );
}
