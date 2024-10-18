import axios from 'axios';
import { genre, shortManga } from '../../../entities/product';

import apiInstance from '../../../shared/api';

export async function getFeaturedSeries() {
    const featuredSeries = axios
        .get('settings.json')
        .then((res) => res.data)
        .then((data) => data.featuredSeries);

    return featuredSeries;
}

export async function getFeaturedGenres(): Promise<genre[]> {
    const featuredGenres: genre[] = await axios
        .get('settings.json')
        .then((res) => res.data)
        .then((data) => data.featuredGenres);

    for (let i = 0; i < featuredGenres.length; i++) {
        const genre = featuredGenres[i];

        genre.products = await apiInstance
            .get(`/manga?chars=Genre_${genre.title}`)
            .then((res) => res.data);
    }

    return featuredGenres;
}

export async function getLatestReleases(): Promise<shortManga[]> {
    const response = await apiInstance.get('manga/new');

    const data = await response.data;

    return data;
}
