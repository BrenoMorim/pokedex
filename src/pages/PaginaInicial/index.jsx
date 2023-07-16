import ListaPokemons from "components/ListaPokemons";
import { Pokedex } from "pokeapi-js-wrapper";
import { useEffect, useMemo, useState } from "react";

export default function PaginaInicial() {
	const pokedex = useMemo(() => new Pokedex(), []);
  const [lista, setLista] = useState([]);
	useEffect(() => {
		async function buscar() {
			const res = await pokedex.getPokemonsList({limit: 10, offset: 0});
			setLista(res.results);
		}
		buscar();
	}, [pokedex]);

	return (
		<main>
			<ListaPokemons pokemons={lista}/>
		</main>
	);
}
