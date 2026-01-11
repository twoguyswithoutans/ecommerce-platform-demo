import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'tr'];

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Await the locale (it is now a Promise in Next.js 15)
  const locale = await requestLocale;

  // 2. Validate the locale
  // If it's undefined or not in our list, return 404
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    // 3. Return the locale explicitly (CRITICAL FIX)
    locale,
    // 4. Load the translation messages
    messages: (await import(`../messages/${locale}.json`)).default
  };
});