'use client';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { removeFromCart, updateQuantity } from '@/redux/cartSlice';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type Props = {
	params: Promise<{ locale: string }>;
};

export default function CartPage({ params }: Props) {
	const { locale } = use(params);
	const t = useTranslations('Cart');

	const cartItems = useAppSelector((state) => state.cart.items);
	const dispatch = useAppDispatch();
	const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

	if (cartItems.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
				<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
						<Trash2 className="w-10 h-10 text-gray-400" />
				</div>
				<h2 className="text-2xl font-bold text-gray-900 mb-2">{t('emptyTitle')}</h2>
				<p className="text-gray-500 mb-8 max-w-sm">{t('emptyDesc')}</p>
				<Link aria-label="start shopping" href={`/${locale}/products`} className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
					{t('startShopping')}
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-6xl mx-auto py-12 px-4">
			<h1 className="text-3xl font-extrabold text-gray-900 mb-8">{t('title')}</h1>
			
			<div className="flex flex-col lg:flex-row gap-12">
				{/* Cart Items */}
				<div className="flex-1 space-y-6">
					{cartItems.map((item) => (
						<div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 transition hover:shadow-md">
							<div className="relative w-24 h-24 flex-shrink-0 bg-white p-2 rounded-lg border border-gray-100">
								<Image src={item.image} alt={item.title} fill className="object-contain" />
							</div>

							<div className="flex-1 text-center sm:text-left">
								<h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
								<p className="text-blue-600 font-bold">${item.price}</p>
							</div>

							<div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
								<button
									aria-label="Decrease quantity"
									onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
									className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm cursor-pointer text-gray-600 hover:text-blue-600"
								>
									<Minus size={14} />
								</button>
								<span className="w-4 text-center font-bold text-gray-900">{item.quantity}</span>
								<button
									aria-label="Increase quantity"
									onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
									className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm cursor-pointer text-gray-600 hover:text-blue-600"
								>
									<Plus size={14} />
								</button>
							</div>

							<button
								aria-label="Remove item"
								onClick={() => dispatch(removeFromCart(item.id))}
								className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition cursor-pointer"
							>
								<Trash2 size={20} />
							</button>
						</div>
					))}
				</div>

				{/* Order Summary */}
				<div className="w-full lg:w-96 h-fit sticky top-24">
					<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
						<h2 className="text-xl font-bold text-gray-900 mb-6">{t('summary')}</h2>
						
						<div className="space-y-4 mb-6">
							<div className="flex justify-between text-gray-500">
								<span>{t('subtotal')}</span>
								<span>${totalPrice.toFixed(2)}</span>
							</div>
							<div className="flex justify-between text-gray-500">
								<span>{t('shipping')}</span>
								<span className="text-green-600 font-medium">{t('free')}</span>
							</div>
						</div>

						<div className="border-t border-gray-100 pt-6 mb-8">
							<div className="flex justify-between items-end">
								<span className="text-lg font-bold text-gray-900">{t('total')}</span>
								<span className="text-3xl font-extrabold text-gray-900">${totalPrice.toFixed(2)}</span>
							</div>
						</div>

						<button aria-label="checkout" className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
							{t('checkout')} <ArrowRight size={20} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}