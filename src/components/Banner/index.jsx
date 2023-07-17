import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <h1 className={styles.titulo}>Minha Pokédex customizada!</h1>
            <p className={styles.paragrafo}>Veja os pokémons por geração, tipo ou região</p>
        </section>
    )
}