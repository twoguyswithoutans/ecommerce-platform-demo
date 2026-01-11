import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StoreProvider from '@/components/StoreProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; 
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
        <body>
            <NextIntlClientProvider messages={messages}>
                <StoreProvider>
                    <Header locale={locale} />
                    <main className="container mx-auto p-4 min-h-screen">
                        {children}
                    </main>
                    <Footer />
                    <Toaster position="bottom-right" />
                </StoreProvider>
            </NextIntlClientProvider>
        </body>
    </html>
  );
}