import styles from './styles/ProductPanel.module.css';

import favoriteIcon from '../../../shared/assets/svg/favorite.svg';

const ProductPanel = (props: {
    product: { id: number; name: string; img: string; price: number };
}) => {
    const { product } = props;

    return (
        <div className={styles['product']}>
            <img className={styles['img']} src={product.img} />
            <button className={styles['favorite-btn']}>
                <img className={styles['icon']} src={favoriteIcon} />
            </button>
            <p className={styles['name']}>{product.name}</p>
            <div>
                <p className={styles['price']}>{product.price + '₽'}</p>
            </div>
        </div>
    );
};

export default ProductPanel;
