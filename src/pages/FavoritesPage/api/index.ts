import manga from '../../../entities/manga/model/mangaModel';
import axiosInstance from '../../../shared/api';

export async function getFavorites(userId: number): Promise<manga[]> {
    try {
        const response = await axiosInstance.get(
            `/manga/wishlist?userId=${userId}`
        );

        const data = await response.data;

        return data;
    } catch (err) {
        console.log(err);

        return [];
    }
}
