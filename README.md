# Pokédex

Projeto em React-js que usa a PokeAPI para listar os Pokémons, permitindo buscas por tipo, nome, geração e entre outras funcionalidades.

| :placard: Vitrine.Dev |                                          |
| --------------------  | ---------------------------------------- |
| :sparkles: Nome       | **Pokédex**                              |
| :label: Tecnologias   | React, JavaScript, HTML, CSS             |
| :rocket: URL          | <https://pokedex-brenomorim.vercel.app/> |

![Página do Pokémon Charizard, contendo seus detalhes](https://github.com/BrenoMorim/pokedex/blob/development/imagens/pokemon-charizard.png?raw=true#vitrinedev)

## Link do deploy da Vercel: <https://pokedex-brenomorim.vercel.app/>

## Detalhes do Projeto

O projeto usa a biblioteca axios para buscar as informações na PokeAPI, aplicando um cache com memoização para evitar fazer requisições desnecessárias. A biblioteca React foi usada para criar os componentes funcionais e reutilizáveis, usando dos hooks useEffect e useState para buscar os dados de forma assíncrona, contendo um componente de Carregando para dar feedback visual ao usuário em casos de demora nas requisições HTTP.

O site segue o padrão de SPA, usando a biblioteca react-router-dom, por padrão os componentes de cabeçalho, barra de navegação e rodápe são colocados em todas as páginas. O mesmo componente de Carregando que é usado para as listas de Pokémons é também usado como fallback nas rotas, em caso de demora no carregamento. O projeto também conta com animações da biblioteca animate.css.

## Páginas

### Página Inicial - Banner do site e listas com os primeiros Pokémons de cada geração

![Página inicial, com seu banner](./imagens/pagina-inicial.png)

![Listas dos Pokémons de cada geração](./imagens/lista-geracoes.png)

> A barra de navegação abaixo do cabeçalho pode ser usada para fazer buscas por tipo, região e geração.

![Barra de navegação](./imagens/barra-navegacao.png)

### Página de Detalhes - Mostra os dados de um Pokémon específico, suas sprites, atributos, tipos, habilidades e Pokémons próximos na Pokédex

![Página com os detalhes do Pokémon Salamence](./imagens/pokemon-salamence.png)

### Página de Erro - Usada como erro 404, quando Pokémon não é encontrado ou filtro não retorna resultado

![Página de erro da aplicação](./imagens/pagina-erro.png)

### Filtro dos Pokémons por Geração

![Página de filtro por geração](./imagens/busca-por-geracao.png)

### Filtro dos Pokémons por Tipo

![Página de filtro por geração](./imagens/busca-por-tipo.png)

### Filtro dos Pokémons por Região

![Página de filtro por geração](./imagens/busca-por-regiao.png)

## Comandos para rodar o projeto na sua máquina

```sh
git clone https://github.com/BrenoMorim/pokedex.git pokedex
cd pokedex
npm install
npm start
```

---
