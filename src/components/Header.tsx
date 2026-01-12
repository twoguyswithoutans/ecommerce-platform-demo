'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import { ChangeEvent } from 'react';

export default function Header({ locale }: { locale: string }) {
	const t = useTranslations('Nav');
	
	const router = useRouter();
	const pathname = usePathname();
	const cartItems = useAppSelector((state) => state.cart.items);
	const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

	const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value;
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};

	return (
		<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
			<div className="container mx-auto px-4 h-20 flex items-center justify-between">
				
				{/* Logo */}
				<Link href={`/${locale}`} className="text-2xl font-extrabold tracking-tight text-gray-900 flex items-center gap-2">
					<span className="bg-blue-600 text-white px-2 py-1 rounded-lg">ShopApp</span>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center gap-8">
					<Link href={`/${locale}`} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
						{t('home')}
					</Link>
					<Link href={`/${locale}/products`} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
						{t('products')}
					</Link>
				</nav>

				{/* Actions */}
				<div className="flex items-center gap-4">
					<div className="relative group">

						<select 
							value={locale} 
							onChange={handleLanguageChange}
							aria-label="language select"
							className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-xs font-bold py-2 px-3 rounded-full focus:outline-none cursor-pointer hover:bg-gray-100"
						>
							<option value="en">🇺🇸 EN</option>
							<option value="tr">🇹🇷 TR</option>
						</select>
					</div>

					<Link aria-label="Cart" href={`/${locale}/cart`} className="relative group p-2">
						<ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition" />
						{totalItems > 0 && (
							<span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
								{totalItems}
							</span>
						)}
					</Link>
				</div>
			</div>
		</header>
	);
}