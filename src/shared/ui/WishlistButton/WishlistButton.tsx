import styles from './styles/index.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../../../model/store/store';
import {
    addProductToWishlist,
    deleteProductFromWishlist,
} from '../../../model/store/user/userSlice';

import favoriteIcon from '../../assets/svg/favorite.svg';
import favoriteFilledIcon from '../../assets/svg/favorite-filled.svg';
import { useEffect } from 'react';

export const WishlistButton = ({ productId }: { productId: number }) => {
    const wishlist = useSelector((state: RootState) => state.user.wishlist);
    const dispatch = useDispatch<AppDispatch>();

    const wishlistAction = () => {
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
        <button
            className={styles['favorite-btn']}
            onClick={() => wishlistAction()}
        >
            <img
                className={styles['icon']}
                src={isWishlisted() ? favoriteFilledIcon : favoriteIcon}
            />
        </button>
    );
};
