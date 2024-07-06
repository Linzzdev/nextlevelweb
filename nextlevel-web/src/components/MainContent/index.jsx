import styles from './index.module.scss'

export const MainContent = () => {
    return (
        <div className={styles.contentContainer}>
            <div className={styles.containerDesc}>
                <h1>Next Level</h1>
                <p>Transforme seu negócio com a nossa tecnologia de ponta! Na Next Level, somos 
                    especialistas em digitalizar empresas 
                    através de websites modernos e funcionais. Impulsione
                     sua presença online, alcance novos clientes e automatize 
                     processos com soluções personalizadas e inovadoras.
                      Junte-se a nós e lidere o futuro digital!</p>
                <button>Saiba mais</button>
            </div>
            <div className={styles.contentImg}>
                <img></img>
            </div>
        </div>
    )
}