'use client';

import { useTranslations } from 'next-intl';
import { addToCart } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export default function AddToCartButton({ product }: { product: any }) {
	const t = useTranslations('Product');
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addToCart({
			id: product.id,
			title: product.title,
			price: product.price,
			image: product.image,
			quantity: 1
		}));
		
		// Success Toast
		toast.success(`${product.title.substring(0, 20)}... ${t('addedSuccess')}`, {
			style: {
				border: '1px solid #10B981',
				padding: '16px',
				color: '#713200',
			},
			iconTheme: {
				primary: '#10B981',
				secondary: '#FFFAEE',
			},
		});
	};

	return (
		<button 
			onClick={handleAdd}
			className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition active:scale-95"
		>
			{t('addToCart')}
		</button>
	);
}