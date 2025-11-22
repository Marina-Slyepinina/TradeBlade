import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const IBMPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'TradeBlade',
  description: 'TradeBlade: Миттєво копіюйте прибуткові угоди від професійних трейдерів. Автоматизуйте інвестиції та приєднуйтесь до успішної команди сьогодні.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={IBMPlexSans.variable}>{children}</body>
    </html>
  );
}
