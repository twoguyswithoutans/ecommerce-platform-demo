import { getTranslations } from 'next-intl/server';

export default async function Footer() {
	const t = await getTranslations('Footer');

	return (
		<footer className="bg-neutral-950 text-neutral-50 py-8 mt-auto">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-xl font-bold mb-4">ShopApp</h3>
					<p className="text-neutral-300">
						{t('slogan')}
					</p>
				</div>
				<div>
					<h4 className="font-bold mb-4">{t('quickLinks')}</h4>
					<ul className="space-y-2 text-neutral-300">
						<li><a href="#" className="hover:text-white">{t('about')}</a></li>
						<li><a href="#" className="hover:text-white">{t('contact')}</a></li>
						<li><a href="#" className="hover:text-white">{t('privacy')}</a></li>
					</ul>
				</div>
				<div>
					<h4 className="font-bold mb-4">{t('contact')}</h4>
					<p className="text-neutral-300">Istanbul, Turkey</p>
					<a href="mailto:codetwocode@gmail.com" className="underline text-blue-400 hover:text-white">codetwocode@gmail.com</a>
				</div>
			</div>
			<div className="border-t border-gray-800 mt-8 pt-8 text-center text-neutral-300">
				&copy; {new Date().getFullYear()} ShopApp. {t('rights')}
			</div>
		</footer>
	);
}