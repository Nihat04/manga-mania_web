import styles from './styles/index.module.css';

import { Link } from 'react-router-dom';

import testImg1 from '../../../public/img/test/100023311367b0 1.png';
import testImg2 from '../../../public/img/test/85-0 1.png';
import testImg3 from '../../../public/img/test/VQ3PhZxoKBrPnv82upnTPynbpCi0TJPrTP7EBxDt 1.png';

const test = [
    { imgPath: testImg2 },
    { imgPath: testImg1 },
    { imgPath: testImg3 },
];

const MainPage = () => {
    return (
        <main className={styles['main']}>
            <section className={styles['most-popular']}>
                <h2 className={styles['section__header']}>
                    MOST
                    <br />
                    POPULAR
                </h2>
                <ul className={styles['section__list']}>
                    {test.map((el) => (
                        <li className={'section__item'}>
                            <Link to="/">
                                <img
                                    className={styles['section__item__img']}
                                    src={el.imgPath}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default MainPage;
