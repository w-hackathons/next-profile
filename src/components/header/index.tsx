import Link from 'next/link';
import { VFC } from 'react';
import styles from './Header.module.scss';

const Header: VFC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.site_title}>
                <Link href="/">
                    <a>
                        <p>名前</p>
                    </a>
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link href="#about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#images">
                            <a>images</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
