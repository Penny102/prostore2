// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Prostore2 - E-Commerce',
  description: 'Dein moderner E-Commerce Shop',
  icons: {
    icon: '/images/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning evita avisos falsos por cambios de clase dark/light
    <html lang='de' suppressHydrationWarning>
      <body className='antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className='flex-grow'>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
