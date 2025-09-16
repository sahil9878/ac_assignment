import './globals.css';
import { ReactNode } from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';

export const metadata = {
  title: 'Dummy E-Commerce',
  description: 'E-commerce demo with Next.js and DummyJSON API',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main style={{ padding: '1rem' }}>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
