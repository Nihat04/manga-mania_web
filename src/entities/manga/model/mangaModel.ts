type manga = {
    id: number;
    name: string;
    imageUrls: string[];
    weight: number;
    pagesNumber: number;
    releaseYear: number;
    genreString: string;
    authorName: string;
    description: string;
    salesCount: number;
    price: number;
    rating: number;
    volume: number;
    source: string;
    discount: number;
};

export type ShortManga = {
    id: number;
    name: string;
    price: number;
    rating: number;
    imageUrl: string;
};

export function convertToShort(manga: manga): ShortManga {
    return {
        id: manga.id,
        name: manga.name,
        price: manga.price,
        rating: manga.rating,
        imageUrl: manga.imageUrls[0],
    };
}

export default manga;
