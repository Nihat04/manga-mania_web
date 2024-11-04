import styles from './styles/index.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch, RootState } from '../../../features/store/store';
import {
    addProductToWishlist,
    deleteProductFromWishlist,
} from '../../../features/store/user/userSlice';
import { createNotification } from '../../../features/notifications';

import favoriteIcon from '../../assets/svg/favorite.svg';
import favoriteFilledIcon from '../../assets/svg/favorite-filled.svg';

export const WishlistButton = ({ productId }: { productId: number }) => {
    const wishlist = useSelector((state: RootState) => state.user.wishlist);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch<AppDispatch>();

    const wishlistAction = () => {
        if (!user) {
            console.log('Modal should be showen');
        }
        if (!wishlist) {
            createNotification({
                header: 'Ошибка отслеживаемого',
                bodyText: 'Не удалось сделать операцию',
            })(dispatch);
            return;
        }
        if (isWishlisted()) {
            dispatch(deleteProductFromWishlist(productId));
        } else {
            dispatch(addProductToWishlist(productId));
        }
    };

    const isWishlisted = (): boolean => {
        if (wishlist?.find((prod) => prod.id === productId)) return true;

        return false;
    };

    useEffect(() => {
        // console.log(wishlist);
    }, [wishlist]);

    return (
        <>
            <button
                className={styles['favorite-btn']}
                onClick={() => wishlistAction()}
            >
                <img
                    className={styles['icon']}
                    src={isWishlisted() ? favoriteFilledIcon : favoriteIcon}
                />
            </button>
        </>
    );
};
