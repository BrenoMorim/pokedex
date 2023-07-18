import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Cabecalho from "components/Cabecalho";
import Pokemon from "pages/Pokemon";
import PaginaErro from "pages/PaginaErro";
import Rodape from "components/Rodape";
import NavBar from "components/NavBar";
import PokemonsFiltrados from "pages/PokemonsFiltrados";
import { Suspense } from "react";
import Carregando from "components/Carregando";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho/>
            <NavBar/>
            <Suspense fallback={<Carregando/>}>
                <Routes path="/">
                    <Route index Component={PaginaInicial}/>
                    <Route path="pokemon/:nome" Component={Pokemon} />
                    <Route path="generation/:nome" element={<PokemonsFiltrados filtro="generation"/>}/>
                    <Route path="type/:nome" element={<PokemonsFiltrados filtro="type"/>}/>
                    <Route path="region/:nome" element={<PokemonsFiltrados filtro="region"/>}/>
                    <Route path="*" Component={PaginaErro}/>
                </Routes>
            </Suspense>
            <Rodape/>
        </BrowserRouter>
    );
}