import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'tr'];

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;

	if (!locale || !locales.includes(locale)) {
		locale = 'tr';
	}

	try {
		return {
			locale,
			messages: (await import(`../messages/${locale}.json`)).default
		};
	} catch (error) {
		console.error("Failed to load translation file:", error);
		notFound();
	}
});