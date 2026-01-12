import { getTranslations } from 'next-intl/server';
import { getProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	category: string;
}

export default async function ProductsPage({ params, searchParams }: {
	params: Promise<{ locale: string }>;
	searchParams: Promise<{ category?: string; sort?: string; min?: string; max?: string }>;
}) {
	const { locale } = await params;
	const { category, sort, min, max } = await searchParams;

	let products = await getProducts();
	const categories = await getCategories();
	const tFilters = await getTranslations('Filters');
	const tHome = await getTranslations('Home');
	const tProd = await getTranslations('Product');

	if (category) {
		products = products.filter((p: Product) => p.category === category);
	}
	if (min) {
		products = products.filter((p: Product) => p.price >= parseFloat(min));
	}
	if (max) {
		products = products.filter((p: Product) => p.price <= parseFloat(max));
	}
	if (sort === 'asc') {
		products.sort((a: Product, b: Product) => a.price - b.price);
	}
	else if (sort === 'desc') {
		products.sort((a: Product, b: Product) => b.price - a.price);
	}

	return (
		<div className="flex flex-col lg:flex-row gap-10 py-8">
			
			{/* SIDEBAR FILTER */}
			<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
				
				{/* Categories Section */}
				<div>
					<h3 className="font-bold text-gray-900 mb-4 px-1">{tFilters('categories')}</h3>
					<div className="space-y-2">
						{/* 'All Products' Link */}
						<a 
							href={`/${locale}/products`} 
							className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
								!category 
									? 'bg-blue-600 text-white' 
									: 'bg-white text-gray-600 hover:bg-gray-100'
							}`}
						>
							{tFilters('allProducts')}
						</a>
						
						{/* Dynamic Categories */}
						{categories.map((cat: string) => (
							<a 
								key={cat} 
								href={`/${locale}/products?category=${cat}`} 
								className={`block px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
									category === cat 
										? 'bg-blue-600 text-white' 
										: 'bg-white text-gray-600 hover:bg-gray-100'
								}`}
							>
								{cat}
							</a>
						))}
					</div>
				</div>

				<div>
					<h3 className="font-bold text-gray-900 mb-4 px-1">{tFilters('priceRange')}</h3>
					<form className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm space-y-4">
						<div className="flex items-center gap-2">
							<input 
								name="min" 
								type="number" 
								placeholder="Min" 
								defaultValue={min}
								className="w-full border rounded px-2 py-1 text-sm"
							/>
							<span className="text-gray-400">-</span>
							<input 
								name="max" 
								type="number" 
								placeholder="Max" 
								defaultValue={max}
								className="w-full border rounded px-2 py-1 text-sm"
							/>
						</div>
						{category && <input type="hidden" name="category" value={category} />}
						{sort && <input type="hidden" name="sort" value={sort} />}

						<button type="submit" className="w-full bg-blue-600 text-white text-sm font-bold py-2 rounded hover:bg-blue-700 transition cursor-pointer">
							{tFilters('applyFilter')}
						</button>
					</form>
				</div>

				{/* Sort Section */}
				<div>
					<h3 className="font-bold text-gray-900 mb-4 px-1">{tFilters('sortBy')}</h3>
					<div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm space-y-1">
						 <a 
							 href={`?sort=asc${category ? `&category=${category}` : ''}`} 
							 className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
								 sort === 'asc' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
							 }`}
						 >
								{tFilters('lowToHigh')}
						 </a>
						 <a 
							 href={`?sort=desc${category ? `&category=${category}` : ''}`} 
							 className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
								 sort === 'desc' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-50'
							 }`}
						 >
								{tFilters('highToLow')}
						 </a>
					</div>
				</div>
			</aside>

			{/* PRODUCT GRID */}
			<div className="flex-1">
				<div className="flex items-center justify-between mb-6">
						<h1 className="text-2xl font-bold text-gray-900 capitalize">
							{category || tFilters('allProducts')}
						</h1>
						<span className="text-gray-500 text-sm">
							{products.length} {tProd('results')}
						</span>
				</div>
				
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((p: Product, index: number) => (
						<ProductCard 
							key={p.id} 
							product={p} 
							locale={locale}
							priority={index < 3}
							buttonText={tHome('viewDetails')}
						/>
					))}
				</div>
			</div>
		</div>
	);
}