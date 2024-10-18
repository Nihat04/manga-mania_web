import apiInstance from '../../../shared/api';
import { manga, shortManga } from '../../product';
import { user } from '../model';

export async function getUser(): Promise<user> {
    const response = await apiInstance
        .get('/accounts/info')
        .catch((err) => err);

    if (response.status === 401) {
        throw new Error('unauthorized user');
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

export async function addToWishlist(productId: number): Promise<manga> {
    const response = await apiInstance.post(`/manga/wishlist/${productId}`);
    const data = await response.data;
    return data;
}

export async function deleteFromWishlist(productId: number) {
    const response = await apiInstance.delete(`/manga/wishlist/${productId}`);
    return response;
}
