import { ShortManga } from '../../../entities/manga/model/mangaModel.ts';
import axiosInstance from '../../../shared/api/index.ts';

export async function getCatalog(): Promise<ShortManga[]> {
    const response = await axiosInstance.get('/manga');

    const data = await response.data;
    return data;
}
