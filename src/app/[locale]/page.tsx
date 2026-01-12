import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';
import { getTranslations } from 'next-intl/server';
interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	category: string;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations('Home');
	const products = await getProducts();
	const featured = products.slice(0, 4); 
	
	return (
		<div>
			<h1 className="text-3xl font-bold mb-6 text-gray-800">{t('featured')}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{featured.map((p: Product, index: number) => (
					<ProductCard
						key={p.id} 
						product={p} 
						locale={locale}
						priority={index < 3}
						buttonText={t('viewDetails')}
					/>
				))}
			</div>
		</div>
	);
}