import { getTranslations } from 'next-intl/server';

export default async function Footer() {
	const t = await getTranslations('Footer');

	return (
		<footer className="bg-gray-900 text-white py-8 mt-auto">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-xl font-bold mb-4">ShopApp</h3>
					<p className="text-gray-400">
						{t('slogan')}
					</p>
				</div>
				<div>
					<h4 className="font-bold mb-4">{t('quickLinks')}</h4>
					<ul className="space-y-2 text-gray-400">
						<li><a href="#" className="hover:text-white">{t('about')}</a></li>
						<li><a href="#" className="hover:text-white">{t('contact')}</a></li>
						<li><a href="#" className="hover:text-white">{t('privacy')}</a></li>
					</ul>
				</div>
				<div>
					<h4 className="font-bold mb-4">{t('contact')}</h4>
					<p className="text-gray-400">Istanbul, Turkey</p>
					<p className="text-gray-400">codetwocode@gmail.com</p>
				</div>
			</div>
			<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
				&copy; {new Date().getFullYear()} ShopApp. {t('rights')}
			</div>
		</footer>
	);
}