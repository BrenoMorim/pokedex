import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import NavBar from "components/NavBar";
import { Suspense, lazy } from "react";
import Carregando from "components/Carregando";

const PaginaInicial = lazy(() => import("pages/PaginaInicial"));
const PokemonsFiltrados = lazy(() => import("pages/PokemonsFiltrados")); 
const PaginaErro = lazy(() => import("pages/PaginaErro"));
const Pokemon = lazy(() => import("pages/Pokemon"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <NavBar />
      <Suspense fallback={<Carregando />}>
        <Routes path="/">
          <Route index Component={PaginaInicial} />
          <Route path="pokemon/:nome" Component={Pokemon} />
          <Route
            path="generation/:nome"
            element={<PokemonsFiltrados filtro="generation" />}
          />
          <Route
            path="type/:nome"
            element={<PokemonsFiltrados filtro="type" />}
          />
          <Route
            path="region/:nome"
            element={<PokemonsFiltrados filtro="region" />}
          />
          <Route path="*" Component={PaginaErro} />
        </Routes>
      </Suspense>
      <Rodape />
    </BrowserRouter>
  );
}
