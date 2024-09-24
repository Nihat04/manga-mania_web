export type manga = {
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

export type shortManga = {
    id: number;
    name: string;
    price: number;
    rating: number;
    imageUrl: string;
};
