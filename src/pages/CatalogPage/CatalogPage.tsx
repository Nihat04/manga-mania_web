import styles from './styles/CatalogPage.module.css';

import { Link } from 'react-router-dom';

import testImg1 from '../../../public/img/test/100023311367b0 1.png';
import testImg2 from '../../../public/img/test/85-0 1.png';
import testImg3 from '../../../public/img/test/VQ3PhZxoKBrPnv82upnTPynbpCi0TJPrTP7EBxDt 1.png';
import testImg4 from '../../../public/img/test/image 1.png';

import Filters from '../../shared/ui/Filters/Filters';
import ProductPanel from './ui/ProductPanel';

const test = [
    { id: 1, name: 'Тетрадь смерти', img: testImg1, price: 700 },
    { id: 2, name: 'Токийские мстители', img: testImg2, price: 700 },
    { id: 3, name: 'Атака титанов', img: testImg3, price: 700 },
    { id: 4, name: 'Берсерк', img: testImg4, price: 700 },
    { id: 5, name: 'Токийские мстители', img: testImg1, price: 219379237 },
    { id: 6, name: 'Токийские мстители', img: testImg2, price: 700 },
    { id: 7, name: 'Токийские мстители', img: testImg3, price: 700 },
    { id: 8, name: 'Токийские мстители', img: testImg4, price: 700 },
    { id: 9, name: 'Токийские мстители', img: testImg1, price: 700 },
    { id: 10, name: 'Токийские мстители', img: testImg2, price: 700 },
    { id: 11, name: 'Токийские мстители', img: testImg3, price: 700 },
    { id: 12, name: 'Токийские мстители', img: testImg4, price: 700 },
    { id: 13, name: 'Токийские мстители', img: testImg1, price: 700 },
    { id: 14, name: 'Токийские мстители', img: testImg2, price: 700 },
    { id: 15, name: 'Токийские мстители', img: testImg3, price: 700 },
    { id: 16, name: 'Токийские мстители', img: testImg4, price: 700 },
];

const CatalogPage = () => {
    return (
        <main className={styles['main']}>
            <section>
                <Filters title="Манга" />
            </section>
            <section className={styles['catalog-section']}>
                <ul className={styles['catalog__list']}>
                    {test.map((el) => (
                        <ProductPanel key={el.id} product={el} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CatalogPage;
