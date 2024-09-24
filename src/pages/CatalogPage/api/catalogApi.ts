import { shortManga } from '../../../entities/product/index.ts';
import apiInstance from '../../../shared/api/index.ts';

export async function getCatalog(): Promise<shortManga[]> {
    const response = await apiInstance.get('/manga');

    const data = await response.data;
    return data;
}
