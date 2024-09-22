import manga from '../../../entities/manga/model/mangaModel';
import axiosInstance from '../../../shared/api';

export async function getProduct(id: number): Promise<manga> {
    const response = await axiosInstance.get(`/manga/${id}`);

    const data = await response.data;

    return data;
}
