import apiInstance from '../../../../../../shared/api';
import searchElement from '../../../../../../model/store/search/model/searchModel';

export async function search(searchQuery: string): Promise<searchElement[]> {
    const response = await apiInstance.get(`/manga/search/${searchQuery}`);
    const data = await response.data;
    return data;
}
