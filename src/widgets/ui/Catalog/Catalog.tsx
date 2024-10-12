import styles from './styles/index.module.css';

import { shortManga } from '../../../entities/product';

import ProductPanel from '../../../entities/product/ui/ProductPanel/ProductPanel';

const Catalog = ({ products }: { products: shortManga[] }) => {
    return (
        <>
            <ul className={styles['catalog__list']}>
                {products.map((el) => (
                    <li key={el.id} className={styles['catalog__item']}>
                        <ProductPanel product={el} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Catalog;
