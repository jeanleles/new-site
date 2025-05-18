import { ThemeProvider } from 'next-themes';
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Jean Leles',
  description: 'Website pessoal de Jean Leles',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen font-sans bg-background dark:bg-foreground text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="w-full max-w-[768px] mx-auto px-4 py-8">
            <MobileMenu />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
