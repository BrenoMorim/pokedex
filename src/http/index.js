import axios from 'axios';

export const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 5000
});

export async function buscarPokemonPorNome(nome) {
    return (await http.get(`pokemon/${nome}`)).data;
}

export async function listarPokemons(offset=0, limit=10) {
    return (await http.get(`pokemon?offset=${offset}&limit=${limit}`)).data;
}
