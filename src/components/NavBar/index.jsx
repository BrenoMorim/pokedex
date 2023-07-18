import { buscarGeracoes } from "http";
import MenuItens from "./MenuItens";
import styles from "./NavBar.module.css";
import { buscarTipos } from "http";
import { buscarRegioes } from "http";
import { useEffect, useState } from "react";

export default function NavBar() {

  const [menuItens, setMenuItens] = useState([]);

  useEffect(() => {

    async function buscarDados() {
      const geracoes = (await buscarGeracoes()).results;
      const tipos = (await buscarTipos()).results;
      const regioes = (await buscarRegioes()).results;

      const itens = [
        {titulo: "Gerações", url: "generation", submenu: geracoes.map(g => g.name)},
        {titulo: "Tipos", url: "type", submenu: tipos.map(t => t.name)},
        {titulo: "Regiões", url: "region", submenu: regioes.map(r => r.name)}
      ];
      setMenuItens(itens);
    }

    buscarDados();

  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menus}>
        {menuItens.length > 0 && menuItens.map(menu => (
          <MenuItens itens={menu} key={menu.titulo} />
        ))}
      </ul>
    </nav>
  );
}