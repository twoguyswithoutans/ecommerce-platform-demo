import Image from 'next/image';
import Link from 'next/link';

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	category: string;
}

export default function ProductCard({ 
	product, 
	locale, 
	priority = false,
	buttonText
}: {
	product: Product;
	locale: string;
	priority?: boolean;
	buttonText: string;
}) {
	return (
		<Link 
			href={`/${locale}/products/${product.id}`}
			className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
		>
			<div className="relative w-full pt-[100%] bg-white p-4">
				<Image 
					src={product.image} 
					alt={product.title} 
					fill 
					className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority={priority} 
				/>
				<span className="absolute top-4 left-4 bg-gray-100/90 backdrop-blur-sm text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
					{product.category}
				</span>
			</div>

			<div className="p-5">
				<h2 className="font-semibold text-gray-900 line-clamp-1 mb-2 group-hover:text-blue-600 transition-colors">
					{product.title}
				</h2>
				<div className="flex items-center justify-between mt-4">
					<span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
					<span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
						{buttonText}
					</span>
				</div>
			</div>
		</Link>
	);
}