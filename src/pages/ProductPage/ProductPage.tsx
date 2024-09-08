import styles from './styles/ProductPage.module.css';

import Filters from '../../shared/ui/Filters/Filters';
import ProductPanel from '../../shared/ui/ProductPanel/ProductPanel';

import img1 from '../../../public/img/test/VQ3PhZxoKBrPnv82upnTPynbpCi0TJPrTP7EBxDt 1.png';

const ProductPage = () => {
    const product = {
        id: 1,
        name: 'Токийские мстители',
        img: img1,
        price: 700,
    };

    const props = [
        {
            label: 'Описание',
        },
        {
            label: 'Характеристика',
        },
        {
            label: 'Отзывы',
        },
    ];

    return (
        <main>
            <Filters title="Манга" />
            <section className={styles['product']}>
                <div className={styles['showcase']}>
                    <ProductPanel product={product} />
                </div>
                <div className="">Том 3</div>
            </section>
            <section className={styles['properties']}>
                <ul className={styles['properties__list']}>
                    {props.map((el, index) => (
                        <li key={index} className={styles['properties__item']}>
                            <button>{el.label}</button>
                        </li>
                    ))}
                </ul>
                <div className={styles['properties__displayed']}></div>
            </section>
            <section className={styles['similar']}>
                <ul className={styles['similar__list']}></ul>
            </section>
        </main>
    );
};

export default ProductPage;
