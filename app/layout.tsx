import '@radix-ui/themes/styles.css';
import './theme-config.css';
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './navbar';
import { Container, Theme } from '@radix-ui/themes';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Theme accentColor='violet'>
          <Navbar />

          <main className='p-5'>
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
