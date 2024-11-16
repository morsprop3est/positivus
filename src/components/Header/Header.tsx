import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <div className={styles.headerTitle}>
                        Navigating the digital landscape for success
                    </div>
                    <div className={styles.headerDescription}>
                        Our digital marketing agency helps businesses grow and succeed online through a range of
                        services including SEO, PPC, social media marketing, and content creation.
                    </div>
                    <div className={styles.headerButtonContainer}>
                        <button className={styles.headerButton}>
                            Book a consultation
                        </button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <Image
                        src="/img/header-illustration.svg"
                        alt="Digital Marketing Illustration"
                        width={460}
                        height={460}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
