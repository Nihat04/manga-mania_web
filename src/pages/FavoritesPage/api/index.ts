import manga from '../../../entities/manga/model/mangaModel';
import apiInstance from '../../../shared/api';

export async function getFavorites(userId: number): Promise<manga[]> {
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
