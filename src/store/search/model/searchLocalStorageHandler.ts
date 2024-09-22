import searchElement from './searchModel';

const LOCAL_STORAGE_KEY = 'search-history';

export function get(): searchElement[] {
    const localStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!localStorageValue) {
        localStorage.setItem(LOCAL_STORAGE_KEY, '[]');
        console.info(`local storage item "${LOCAL_STORAGE_KEY}" created`);
        return [];
    }

    const localStorageAsObject = JSON.parse(localStorageValue);
    return localStorageAsObject;
}

export function addElement(searchEl: searchElement): void {
    let searchHistory = get();

    if (searchHistory.some((el) => el.id === searchEl.id)) {
        searchHistory = searchHistory.filter((el) => el.id !== searchEl.id);
    }
    searchHistory.unshift(searchEl);

    const objectAsString = JSON.stringify(searchHistory);
    localStorage.setItem(LOCAL_STORAGE_KEY, objectAsString);
}

export function deleteElement(id: number): void {
    let searchHistory = get();

    searchHistory = searchHistory.filter((searchEl) => searchEl.id !== id);

    const objectAsString = JSON.stringify(searchHistory);
    localStorage.setItem(LOCAL_STORAGE_KEY, objectAsString);
}

export function deleteAll(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, '[]');
}
