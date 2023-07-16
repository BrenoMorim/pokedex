import ListaPokemons from "components/ListaPokemons";
import { listarPokemons } from "http";
import { useEffect, useState } from "react";

export default function PaginaInicial() {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    async function buscar() {
      const res = await listarPokemons({ limit: 10, offset: 0 });
      setLista(res.results);
    }
    buscar();
  }, []);

  return (
    <main>
      <ListaPokemons pokemons={lista} />
    </main>
  );
}
