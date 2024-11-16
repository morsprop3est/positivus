import styles from './Heading.module.scss';

const Logotypes = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headingWrapper}>
                <div className={styles.heading}>
                    Services
                </div>
                <div className={styles.subheading}>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed
                    online. These services include:
                </div>
            </div>
        </div>
    );
};

export default Logotypes;
