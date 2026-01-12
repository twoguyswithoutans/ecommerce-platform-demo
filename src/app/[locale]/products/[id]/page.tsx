import { getProduct } from '@/lib/api';
import AddToCartButton from '@/components/AddToCartButton';
import Image from 'next/image';

type Props = {
	params: Promise<{ id: string; locale: string }>;
};

export async function generateMetadata({ params }: Props) {
	const { id } = await params;
	const product = await getProduct(id);
	
	return {
		title: product.title,
		description: product.description.slice(0, 150),
	};
}

export default async function ProductDetail({ params }: Props) {
	const { id } = await params;
	const product = await getProduct(id);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
			<div className="relative h-96 w-full bg-white rounded-lg shadow-sm p-4">
				<Image 
					src={product.image} 
					alt={product.title} 
					fill 
					className="object-contain" 
					sizes="(max-width: 768px) 100vw, 50vw"
					priority
				/>
			</div>
			<div className="flex flex-col justify-center">
				<span className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
					{product.category}
				</span>
				<h1 className="text-3xl font-bold mb-4 text-gray-900 mt-2">{product.title}</h1>
				<p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
				
				<div className="flex items-center justify-between mb-8">
					<span className="text-4xl text-green-600 font-bold">${product.price}</span>
				</div>

				<div className="w-full md:w-auto">
					<AddToCartButton product={product} />
				</div>
			</div>
		</div>
	);
}