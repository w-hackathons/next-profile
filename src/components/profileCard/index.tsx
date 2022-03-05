import { VFC } from 'react';
import styles from './ProfileCard.module.scss';

type Props = {
    name: string;
    description: string;
};

const ProfileCard: VFC<Props> = (props) => {
    return (
        <div className={styles.container__about__content}>
            <img
                src="https://1.bp.blogspot.com/-lQvVaZVuCfs/XvcI4m2KdKI/AAAAAAABZts/6a_b9K3DrscSuAa_9lY6dDEb313PNnklwCNcBGAsYHQ/s400/megane_hikaru_woman.png"
                alt="テキストテキストテキスト"
                height="100"
                width="100"
                className={styles.container__about__content_img}
            />
            <div className={styles.container__about_text}>
                <h3 className={styles.content_title}>{props.name}</h3>
                <p className={styles.content_text}>{props.description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
