import { manga, shortManga } from './types';

export function convertToShort(manga: manga): shortManga {
    return {
        id: manga.id,
        name: manga.name,
        price: manga.price,
        discount: manga.discount,
        rating: manga.rating,
        imageUrls: manga.imageUrls,
    };
}
