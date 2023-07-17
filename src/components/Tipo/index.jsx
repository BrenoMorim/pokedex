import { tipos } from "./tipos.js";

export default function Tipo({nomeTipo}) {

    let cores = tipos[nomeTipo];
    if (!cores) {
        cores = tipos.normal;
    }

    const estilo = {
        backgroundColor: cores.corPrimaria,
        color: cores.corSecundaria,
        padding: ".25rem .75rem",
        borderRadius: "1rem",
        fontSize: "1.5rem",
        border: `3px solid ${cores.corSecundaria}`
    }

    return (
        <span style={estilo}>{nomeTipo}</span>
    );
}