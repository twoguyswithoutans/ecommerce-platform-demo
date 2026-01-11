'use client';
import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../redux/store';
import { addToCart } from '../redux/cartSlice';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	useEffect(() => {
		if (!storeRef.current) return;

		const savedCart = localStorage.getItem('shopping-cart');
		if (savedCart) {
			try {
				const parsedCart = JSON.parse(savedCart);
				parsedCart.forEach((item: any) => {
					 storeRef.current?.dispatch(addToCart(item));
				});
			} catch (e) {
				console.error("Failed to load cart", e);
			}
		}

		const unsubscribe = storeRef.current.subscribe(() => {
			const state = storeRef.current?.getState();
			if (state?.cart.items) {
				localStorage.setItem('shopping-cart', JSON.stringify(state.cart.items));
			}
		});

		return () => unsubscribe();
	}, []);

	return <Provider store={storeRef.current}>{children}</Provider>;
}