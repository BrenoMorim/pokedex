import { lazy, useEffect, useState } from "react";
import styles from "./PokemonsFiltrados.module.css";
import { useParams } from "react-router-dom";
import { detalharGeracao } from "http";
import ListaPokemons from "components/ListaPokemons";
import { detalharTipo } from "http";
import { detalharRegiao } from "http";
import Botao from "components/Botao";

const PaginaErro = lazy(() => import("pages/PaginaErro"));

export default function PokemonsFiltrados({ filtro }) {
  
  const { nome } = useParams();
  
  const titulos = {
    generation: nome.includes("-") ? `Pokémons da ${nome.toUpperCase()}` : `Pokémons da Geração ${nome.toUpperCase()}`,
    type: `Pokémons do tipo ${nome.toUpperCase()}`,
    region: `Pokémons da região de ${nome.toUpperCase()}`
  };

  const [dados, setDados] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function buscarDados() {
      try {
        let pokemonsEncontrados = [];
        if (filtro === "generation") {
          pokemonsEncontrados = (await detalharGeracao(nome)).pokemon_species;
        } else if (filtro === "type") {
          pokemonsEncontrados = (await detalharTipo(nome)).pokemon.map(p => p.pokemon);
        } else {
          const geracao = (await detalharRegiao(nome)).main_generation; 
          pokemonsEncontrados = (await detalharGeracao(geracao.name)).pokemon_species;
        }

        if (pokemonsEncontrados.length === 0) setErro(true);
        
        pokemonsEncontrados = pokemonsEncontrados.sort((p1, p2) => {
          const p1Split = p1.url.split("/");
          const p2Split = p2.url.split("/");
          const idP1 = p1Split.at(p1Split.length - 2);
          const idP2 = p2Split.at(p2Split.length - 2);
          return Number(idP1) - Number(idP2);
        });
        setDados(pokemonsEncontrados);
        setPokemons(pokemonsEncontrados.slice(0, 15));
      } catch {
        setErro(true);
      }
    }

    buscarDados();
  }, [filtro, nome]);

  if (erro) return <PaginaErro filtro={nome} />;

  function carregarMais() {
    setPokemons(dados.slice(0, pokemons.length + 15));
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>{titulos[filtro]}</h1>
        <ListaPokemons  pokemons={pokemons}/>
      <div className={styles.botaoContainer}>
        {(dados.length > pokemons.length && dados.length > 0) && 
          <Botao onClick={carregarMais}>Carregar mais</Botao>
        }
      </div>
    </main>
  );
}