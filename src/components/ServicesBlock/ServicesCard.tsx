import Image from "next/image";
import styles from './ServicesBlock.module.scss';

const ServicesCard = ({ title, imageUrl, primaryColor, secondaryColor }) => {
    return (
        <div className={styles.servicesCard} style={{ borderColor: primaryColor }}>
            <div className={styles.cardLeft}>
                <h3 className={styles.cardTitle} style={{ color: primaryColor }}>{title}</h3>
                <div className={styles.cardButton}>
                    <button style={{ backgroundColor: primaryColor, color: secondaryColor }}>
                        <span className={styles.arrow}></span>
                    </button>
                </div>
            </div>

            <div className={styles.cardRight}>
                <div className={styles.cardImage}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={200}
                        height={200}
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
