import { manga } from '../../../entities/product';
import apiInstance from '../../../shared/api';

export async function getProduct(id: number): Promise<manga> {
    const response = await apiInstance.get(`/manga/${id}`);

    const data = await response.data;

    return data;
}
