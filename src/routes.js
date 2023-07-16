import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Cabecalho from "components/Cabecalho";
import Pokemon from "pages/Pokemon";
import PaginaErro from "pages/PaginaErro";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho/>
            <Routes path="/">
                <Route index Component={PaginaInicial}/>
                <Route path="pokemon/:nome" Component={Pokemon} />
                <Route path="*" Component={PaginaErro}/>
            </Routes>
        </BrowserRouter>
    );
}