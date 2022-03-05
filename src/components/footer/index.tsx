import { useFooterDate } from '@/hooks/useFooterDate';
import { VFC } from 'react';
import styles from './Footer.module.scss';

const Header: VFC = () => {
    const now = useFooterDate();
    return (
        <footer className={styles.footer}>
            {/* <p>&copy; 2020 Profile</p> */}
            <p>{now}</p>
        </footer>
    );
};

export default Header;
