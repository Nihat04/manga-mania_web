import { shortManga } from '../../../../../../entities/product';
import apiInstance from '../../../../../../shared/api';

export async function getDiscountManga(): Promise<shortManga[]> {
    const response = await apiInstance.get('/manga/discount');

    const data = await response.data;
    return data;
}
