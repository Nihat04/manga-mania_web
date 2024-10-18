import cartProduct from '../../../features/store/cart/model/cartModels';
import apiInstance from '../../../shared/api';
import { user } from '../../user';

export async function placeOrder({
    cartProducts,
    user,
}: {
    cartProducts: cartProduct[];
    user: user;
}) {
    const orderForm = {
        goodsIds: cartProducts.map((product) => product.product.id),
        locality: 'Екатеринбург',
        country: 'Россия',
        pickUpPoint: 'string',
        comment: 'string',
        fullname: user.displayName,
        email: user.email,
        sendOrderNotifications: true,
        promo: 'string',
        bonusesUsedCount: 0,
    };

    const response = await apiInstance.post('/order', orderForm);

    const data = await response.data;

    return data;
}
