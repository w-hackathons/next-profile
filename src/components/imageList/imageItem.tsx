import { VFC } from 'react';
import styles from './ImageList.module.scss';

type Props = {
    img: string;
    alt: string;
    title: string;
    description: string;
};

const ImageItem: VFC<Props> = (props) => {
    return (
        <li>
            <img src={props.img} alt={props.alt} width={500} height={500} />
            <h3 className={styles.content_title}>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
};

export default ImageItem;
