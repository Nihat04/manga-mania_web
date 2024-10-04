import apiInstance from '..';
import { shortManga } from '../../../entities/product';
import user from '../../../entities/user/model/userModel';

export async function getUser(): Promise<user> {
    const response = await apiInstance
        .get('/accounts/profile')
        .catch((err) => err);

    if (response.status === 401) {
        throw new Error('anauthorized user');
    }

    const data = await response.data;
    return data;
}

export async function getWishlist(userId: number): Promise<shortManga[]> {
    try {
        const response = await apiInstance.get(
            `/manga/wishlist?userId=${userId}`
        );

        const data = await response.data;
        return data;
    } catch (err) {
        console.log(err);

        return [];
    }
}

export async function addToWishlist(productId: number) {
    const response = await apiInstance.post(`/manga/wishlist?id=${productId}`);
    return response;
}
