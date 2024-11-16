import Image from 'next/image';
import styles from './Logotypes.module.scss';

const Logotypes = () => {
    return (
        <div className={styles.logotypes}>
            <div className={styles.container}>
                <Image src="/img/logotypes/amazon.svg" alt="Logo 1" height={33} width={100}/>
                <Image src="/img/logotypes/dribbble.svg" alt="Logo 2" height={33} width={100}/>
                <Image src="/img/logotypes/hubspot.svg" alt="Logo 3" height={33} width={100}/>
                <Image src="/img/logotypes/netflix.svg" alt="Logo 4" height={33} width={100}/>
                <Image src="/img/logotypes/notion.svg" alt="Logo 5" height={33} width={100}/>
                <Image src="/img/logotypes/zoom.svg" alt="Logo 6" height={33} width={100}/>
            </div>
        </div>
    );
};

export default Logotypes;
