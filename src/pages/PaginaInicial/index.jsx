import styles from "./PaginaInicial.module.css";
import ListaPokemons from "components/ListaPokemons";
import { listarPokemons } from "http";
import { useEffect, useState } from "react";
import geracoes from "data/geracoes.js";
import Botao from "components/Botao";
import { useNavigate } from "react-router-dom";

export default function PaginaInicial() {
  const [listaGeracoes, setListaGeracoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const promessas = geracoes.map(async (geracao) => {
      return {nome: geracao.nome, pokemons: (await listarPokemons(geracao.start, 5)).results}; 
    });
    Promise.all(promessas).then(resultado => setListaGeracoes(resultado));
  }, [])

  return (
    <main className={styles.container}>
      {listaGeracoes.map((geracao, index) => {
        return (
          <div className={styles.geracao} key={geracao.nome}>
            <h2 className={styles.titulo}>{geracao.nome}:</h2>
            <ListaPokemons pokemons={geracao.pokemons} />
            <Botao
              onClick={() => navigate(`/geracoes/${index}`)} 
              tamanhoFonte="1.25rem"
            >Ver mais pokemons dessa geração</Botao>
          </div>
        );
      })}
    </main>
  );
}
