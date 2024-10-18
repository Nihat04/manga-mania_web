import { shortManga } from '../../../entities/product/index.ts';
import apiInstance from '../../../shared/api/index.ts';

export async function getCatalog(linkSearches?: string): Promise<shortManga[]> {
    const specialSearches = [
        'orderBy',
        'minPrice',
        'maxPrice',
        'minReleaseYear',
        'maxReleaseYear',
        'pageNumber',
        'pageSize',
    ];

    let searchString = '';

    if (linkSearches) {
        const searchValues = linkSearches.slice(1).split('&');

        searchValues.forEach((search) => {
            const splitedSearch = search.split('=');

            if (specialSearches.includes(splitedSearch[0])) {
                searchString += `&${splitedSearch[0]}=${splitedSearch[1]}`;
                return;
            }

            searchString += `&chars=${splitedSearch[0]}_${splitedSearch[1]}`;
        });

        searchString = '?' + searchString.slice(1);
    }

    const response = await apiInstance.get('/manga' + searchString);

    const data = await response.data;
    return data;
}
// https://localhost:7144/manga?chars=AgeCategory_12%2B&orderBy=Popular&minPrice=0&maxPrice=2147483647&minReleaseYear=0&maxReleaseYear=2147483647&pageNumber=1&pageSize=10
