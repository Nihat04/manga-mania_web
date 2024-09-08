import styles from './styles/ProductPage.module.css';

import Filters from '../../shared/ui/Filters/Filters';
import ProductPanel from '../CatalogPage/ui/ProductPanel';

import img1 from '../../../public/img/test/VQ3PhZxoKBrPnv82upnTPynbpCi0TJPrTP7EBxDt 1.png';

const ProductPage = () => {
    const product = {
        id: 1,
        name: 'Токийские мстители',
        img: img1,
        price: 700,
    };

    return (
        <main>
            <Filters title="Манга" />
            <section className={styles['product']}>
                <ProductPanel product={product} />
            </section>
        </main>
    );
};

export default ProductPage;
