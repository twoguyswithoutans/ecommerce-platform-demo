import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
	id: number;
	title: string;
	price: number;
	image: string;
	quantity: number;
}

interface CartState {
	items: CartItem[];
}

const initialState: CartState = { items: [] };

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<CartItem[]>) => {
			state.items = action.payload;
		},
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const existing = state.items.find(item => item.id === action.payload.id);
			if (existing) {
				existing.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		updateQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
			const item = state.items.find(i => i.id === action.payload.id);
			if (item) item.quantity = action.payload.quantity;
		}
	}
});

export const { addToCart, removeFromCart, updateQuantity, setCart } = cartSlice.actions;
export default cartSlice.reducer;