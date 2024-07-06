import { OurFeatures } from "../features"
import { Footer } from "../footer"
import { Header } from "../Header"
import { MainContent } from "../MainContent"
import { OurProjects } from "../projectPage"
import { Testimonials } from "../testimonials"
import styles from './index.module.scss'

export const Container = () => {
    return(
        <main className={styles.main} >
            <Header/>
            <MainContent/>
            <OurFeatures/>
            <OurProjects/>
            <Testimonials/>
            <Footer/>
        </main>
    )
}