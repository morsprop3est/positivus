import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#">
                        <Image
                            src="/img/logo.svg"
                            alt="Logo"
                            width={200}
                            height={50}
                        />
                    </a>
                </div>
                <div className={styles.navbarButtons}>
                    <a href="#about-us" className={styles.navLink}>About Us</a>
                    <a href="#services" className={styles.navLink}>Services</a>
                    <a href="#use-cases" className={styles.navLink}>Use Cases</a>
                    <a href="#pricing" className={styles.navLink}>Pricing</a>
                    <a href="#blog" className={styles.navLink}>Blog</a>
                    <div className={styles.requestButton}>
                        <a href="#">Request a Quote</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;