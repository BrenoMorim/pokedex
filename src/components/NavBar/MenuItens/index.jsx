import { useState } from "react";
import styles from "./MenuItens.module.css";
import Dropdown from "../Dropdown";

export default function MenuItens({itens}) {

  const [ativo, setAtivo] = useState(false);

  return (
    <li className={styles.menuItens}>
        <button 
          className={styles.menu} 
          type="button" 
          aria-haspopup="menu" 
          onClick={() => setAtivo(!ativo)}
        >
          {itens.titulo}{ativo ? "▼" : "➤"}
        </button>
        <Dropdown setAtivo={setAtivo} submenus={itens.submenu} url={itens.url} ativo={ativo} />
    </li>
  );
}