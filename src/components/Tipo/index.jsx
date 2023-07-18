import styles from "./Tipo.module.css";
import { Link } from "react-router-dom";
import { tipos } from "./tipos.js";

export default function Tipo({nomeTipo}) {

    let cores = tipos[nomeTipo];
    if (!cores) {
        cores = tipos.normal;
    }

    const estilo = {
        backgroundColor: cores.corPrimaria,
        textTransform: "uppercase",
        textDecoration: "none",
        color: cores.corSecundaria,
        
        border: `3px solid ${cores.corSecundaria}`
    }

    return (
        <Link className={styles.tipo} style={estilo} to={`/type/${nomeTipo}`}>{nomeTipo}</Link>
    );
}