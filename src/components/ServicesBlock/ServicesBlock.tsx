import ServicesCard from "./ServicesCard";
import styles from './ServicesBlock.module.scss';

const ServicesBlock = () => {
    return (
        <div className={styles.servicesBlock}>
            <div className={styles.container}>
                <ServicesCard
                    title="Search engine optimization"
                    imageUrl="/img/services-block/1.png"
                />
                <ServicesCard
                    title="Pay-per-click advertising"
                    imageUrl="/img/services-block/2.png"
                />
                <ServicesCard
                    title="Social Media Marketing"
                    imageUrl="/img/services-block/3.png"
                />
                <ServicesCard
                    title="Email Marketing"
                    imageUrl="/img/services-block/6.png"
                />
                <ServicesCard
                    title="Content Creation"
                    imageUrl="/img/services-block/4.png"
                />
                <ServicesCard
                    title="Analytics and Tracking"
                    imageUrl="/img/services-block/5.png"
                />

            </div>
        </div>
    );
};

export default ServicesBlock;
