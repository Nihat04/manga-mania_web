import { manga, shortManga } from './types';

export function convertToShort(manga: manga): shortManga {
    return {
        id: manga.id,
        name: manga.name,
        price: manga.price,
        rating: manga.rating,
        imageUrl: manga.imageUrls[0],
    };
}
