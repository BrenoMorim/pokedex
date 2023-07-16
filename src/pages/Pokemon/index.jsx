import styles from "./Pokemon.module.css";
import { buscarPokemonPorNome } from "http";
import PaginaErro from "pages/PaginaErro";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {

  const { nome } = useParams();
  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => {
    async function buscar() {
      try {
        setPokemon(await buscarPokemonPorNome(nome));
      } catch(e) {
        setPokemon({erro: true});
      }
    }
    buscar();
  }, [nome]);
  if (pokemon.erro) {
    return <PaginaErro pokemon={nome}/>;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>{pokemon.name}</h1>
      <div className={styles.sectionsContainer}>
        <section className={styles.sprites}>
          <img 
            className={styles.sprite} 
            src={pokemon.sprites?.front_default} 
            alt={`Imagem da versão padrão do ${pokemon.name}`}
          />
          <img 
            className={styles.sprite} 
            src={pokemon.sprites?.front_shiny} 
            alt={`Imagem da versão radiante do ${pokemon.name}`}
          />
        </section>
        <section className={styles.informacoes}>
          <div className={styles.tipos}>
            <h3>Tipos:</h3>
            <ul>
              {pokemon.types?.map(tipo => <li key={tipo.type.name}>{tipo.type.name}</li>)}
            </ul>
          </div>
          <div className={styles.divisoria}></div>
          <div className={styles.medidas}>
            <h3>Medidas:</h3>
            <ul>
              <li>Peso: {pokemon.weight}</li>
              <li>Altura: {pokemon.height}</li>
            </ul>
          </div>
          <div className={styles.divisoria}></div>
          <div className={styles.habilidades}>
            <h3>Habilidades:</h3>
            <ul>
              {pokemon.abilities?.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
