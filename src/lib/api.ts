const BASE_URL = 'https://fakestoreapi.com';

async function fetchAPI(endpoint: string) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
}

export async function getProducts() {
    return fetchAPI('/products');
}

export async function getProduct(id: string) {
    return fetchAPI(`/products/${id}`);
}

export async function getCategories() {
    return fetchAPI('/products/categories');
}