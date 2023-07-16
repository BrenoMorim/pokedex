import { useNavigate } from "react-router-dom";
import styles from "./PaginaErro.module.css";
import Botao from "components/Botao";

export default function PaginaErro({pokemon=""}) {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <h2 className={styles.titulo}>Ops! Um erro aconteceu...</h2>
      <div
        className={styles.imagem}
        style={{backgroundImage: "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png)"}} 
      ></div>
      <h3 className={styles.subtitulo}>
        {pokemon ? 
          `O pokémon "${pokemon}" não foi encontrado, será que você escreveu o nome dele errado?` 
          : 
          "A página que você estava buscando não foi encontrada =("}
      </h3>
      <Botao onClick={() => navigate("/")}>Voltar para Página Inicial</Botao>
    </main>
  );
}