import styles from './index.module.scss'

export const OurFeatures = () => {
    return (
        <div className={styles.featuresContainer} >
            <div className={styles.featuresContainerTitle}>
                <h2>Conheça nossas tecnologias e serviços</h2>
                <p>Na Next Level, utilizamos as ferramentas mais modernas e avançadas
                    do mercado para digitalizar sua <br />
                    empresa com excelência. Nossa
                    equipe experiente aproveita
                    as tecnologias mais recentes para criar websites responsivos, seguros e de alta performance.</p>
            </div>
            <div className={styles.featureList}>
                <ul>
                    <li>
                        <img></img>
                        <h2>Landing Pages</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </li>
                    <li>
                        <img></img>
                        <h2>E-Commerce</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </li>
                    <li>
                        <img></img>
                        <h2>Sistema de gestão web</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </li>
                    <li>
                        <img></img>
                        <h2>ChatBots</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </li>
                    <li>
                        <img></img>
                        <h2>Automação de tarefas</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </li>
                    <li>
                        <img></img>
                        <h2>Scrapping</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}