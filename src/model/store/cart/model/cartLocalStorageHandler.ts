import cartProduct from './cartModels';

const localStorageKey = 'cart';

export function getCart(): cartProduct[] {
    const localStorageValue = localStorage.getItem(localStorageKey);

    if (!localStorageValue) throw new Error('cart is not in local storage');

    const localStorageAsObject = JSON.parse(localStorageValue);
    return localStorageAsObject;
}

export function saveToCart(cart: cartProduct[]): void {
    const objectAsString = JSON.stringify(cart);
    localStorage.setItem(localStorageKey, objectAsString);
}
