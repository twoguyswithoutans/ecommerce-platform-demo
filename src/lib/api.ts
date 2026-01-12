const BASE_URL = 'https://fakestoreapi.com';

async function fetchAPI(endpoint: string) {
	try {
		const res = await fetch(`${BASE_URL}${endpoint}`, {
			next: { revalidate: 3600 },
			headers: {
				'Content-Type': 'application/json',
				'User-Agent': 'Next.js 14 E-Commerce App' 
			}
		});

		if (!res.ok) {
			console.error(`API Error: ${res.status} ${res.statusText} at ${endpoint}`);
			return null;
		}

		return await res.json();
		
	} catch (error) {
		console.error(`Network Error at ${endpoint}:`, error);
		return null;
	}
}

export async function getProducts() {
	const data = await fetchAPI('/products');
	return data || [];
}

export async function getProduct(id: string) {
	const data = await fetchAPI(`/products/${id}`);
	if (!data) {
		return {
			id: 0, 
			title: "Product Unavailable", 
			price: 0, 
			description: "Could not load product data.", 
			image: "/placeholder.png", 
			category: "uncategorized"
		};
	}
	return data;
}

export async function getCategories() {
	const data = await fetchAPI('/products/categories');
	return data || [];
}