import Footer from '@/components/footer';
import Header from '@/components/header';
import ImageList from '@/components/imageList';
import ProfileCard from '@/components/profileCard';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>自分のプロフィールページ！</title>
                <meta name="description" content="自己紹介ページです" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* ヘッダー  */}
            <Header />

            {/* メインの情報 */}
            <main>
                <div className={styles.container}>
                    <img
                        src="https://www.pakutaso.com/shared/img/thumb/redsg13302_TP_V.jpg"
                        alt="トプ画"
                        height={100}
                        width={200}
                    />
                </div>

                <section id="about" className={styles.container__about}>
                    <h2 className={styles.section_title}>About</h2>
                    <ProfileCard
                        name="自分の名前"
                        description={`自分は○○が趣味でよく○○しています。\n学生で現在○○○○大学の○○学部、○○学科○年に所属しています。\n現在はプログラミングを学んでいます！`}
                    />
                </section>

                <section id="images" className={styles.container__images}>
                    <h2 className={styles.section_title}>Images</h2>
                    <ImageList />
                </section>
            </main>

            {/* フッター  */}
            <Footer />
        </div>
    );
}
