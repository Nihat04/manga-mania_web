export type manga = {
    id: number;
    name: string;
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
    isNew: boolean;
    coverType: string;
    publishingHouse: string;
    ageCategory: string;
    reviewsCount: number;
    ordersIds: number[];
    rates: number[];
    usersIdsWhoWish: number[];
    imageUrls: string[];
};

export type shortManga = {
    id: number;
    name: string;
    price: number;
    discount: number;
    rating: number;
    imageUrls: string[];
};

export type genre = {
    id: number;
    title: string;
    bgImgUrl: string;
    products: shortManga[];
};
