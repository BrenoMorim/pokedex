import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";
import Cabecalho from "components/Cabecalho";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho/>
            <Routes path="/">
                <Route index Component={PaginaInicial}/>
            </Routes>
        </BrowserRouter>
    );
}