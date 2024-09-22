import axios from 'axios';
import { ShortManga } from '../../../entities/manga/model/mangaModel';

import axiosInstance from '../../../shared/api';

export async function getFeaturedSeries() {
    const test = [
        {
            caption: 'ВОЛЕЙБОЛ',
            img: '/img/test/voley.png',
            color: '#fca717',
        },
        {
            caption: 'БЛЮ ЛОК',
            img: '/img/test/blue.png',
            color: '#018ac0',
        },
        {
            caption: 'ХОРИМИЯ',
            img: '/img/test/hori.png',
            color: '#ECA1B1',
        },
    ];

    return test;
}

export type genre = {
    id: number;
    title: string;
    bgImgUrl: string;
    products: ShortManga[];
};

export async function getFeaturedGenres(): Promise<genre[]> {
    const featuredGenres: genre[] = await axios
        .get('settings.json')
        .then((res) => res.data)
        .then((data) => data.featuredGenres);

    for (let i = 0; i < featuredGenres.length; i++) {
        const genre = featuredGenres[i];

        genre.products = await axiosInstance
            .get(`/manga/genre/${genre.title}`)
            .then((res) => res.data);
    }

    return featuredGenres;
}
