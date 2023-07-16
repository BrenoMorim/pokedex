import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes path="/">
                <Route index Component={PaginaInicial}/>
            </Routes>
        </BrowserRouter>
    );
}