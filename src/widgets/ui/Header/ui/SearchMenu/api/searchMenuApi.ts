import axiosInstance from '../../../../../../shared/api';
import searchElement from '../../../../../../store/search/model/searchModel';

export async function search(searchQuery: string): Promise<searchElement[]> {
    const response = await axiosInstance.get(`/manga/search/${searchQuery}`);
    const data = await response.data;
    return data;
}
