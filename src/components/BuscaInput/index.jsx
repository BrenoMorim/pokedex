import { useState } from "react";
import styles from "./BuscaInput.module.css";
import {ReactComponent as Search} from "./search.svg";
import { useNavigate } from "react-router-dom";

export default function BuscaInput({placeholder}) {

  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.buscaContainer}>
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
          onClick={() => {
            if (!busca) return;
            navigate(`/pokemon/${busca.toLowerCase()}`);
            setBusca("");
          }}
        />
      </button>
    </div>
  );
}
