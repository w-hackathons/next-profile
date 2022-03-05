import ImageItem from '@/components/imageList/imageItem';
import { VFC } from 'react';

const imageList = [
    {
        img: 'https://1.bp.blogspot.com/-29VIHWBD8WA/Xv3UG8pXrwI/AAAAAAABZz0/1s5ueoDxBKI6C4K-a_Djv9OkO-BlPwuxwCNcBGAsYHQ/s400/city_night_yoruno_machi.png',
        alt: '夜景',
        title: '夜景',
        description: '○○で撮影しました！',
    },
    {
        img: 'https://4.bp.blogspot.com/-_3_Hua-2ehY/WI1zf3hT50I/AAAAAAABBZI/FqqR58-_c0c_kQf50_o2Y3Uydl7SjwnIwCLcB/s400/hanabi_kaichu.png',
        alt: '花火',
        title: '花火',
        description: '○○への旅行で撮りました！',
    },
    {
        img: 'https://1.bp.blogspot.com/-LDQjratJYoM/YHDkNRgd1XI/AAAAAAABdl8/h5yxEkLKmBcXC6-GXJsoOIzJsCDWd5sMACNcBGAsYHQ/s400/landmark_tausyubetsu_bridge.png',
        alt: '川',
        title: '散歩コースの川',
        description: 'いつもここを散歩してます！',
    },
];

const ImageList: VFC = () => {
    return (
        <ul>
            {imageList.map((item, index) => (
                <ImageItem
                    key={index}
                    img={item.img}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </ul>
    );
};

export default ImageList;
