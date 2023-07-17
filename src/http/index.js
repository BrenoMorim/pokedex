import axios from 'axios';

const cache = new Map();

export const http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 5000
});

async function get(url) {
    if (cache.has(url)) return cache.get(url);

    const resposta = (await http.get(url)).data;
    cache.set(url, resposta); 
    return resposta;
}

export async function buscarPokemonPorNome(nome) {
    const url = `pokemon/${nome}`;
    return get(url);
}

export async function listarPokemons(offset, limit) {
    const url = `pokemon?offset=${offset}&limit=${limit}`;
    return get(url);
}

export async function buscarGeracoes() {
    const url = "generation";
    return get(url);
}

export async function detalharGeracao(id) {
    const url = `generation/${id}`;
    return get(url);
}
