import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Logotypes from "../components/Logotypes/Logotypes";
import Heading from "../components/Heading/Heading";
import ServicesBlock from "../components/ServicesBlock/ServicesBlock";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <div className={styles.page}>
            <Navbar />
            <Header />
            <Logotypes />
            <Heading />
            <ServicesBlock />
        </div>
    );
}
