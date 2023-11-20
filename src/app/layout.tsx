import type { Metadata } from 'next';
import './globals.css';

import { Header } from '@/components';

export const metadata: Metadata = {
  title: 'قطعه کد | تمام کدهای خود را در مکانی امن ذخیره کنید',
  description: 'کدهای خود را در مکانی امن ذخیره کنید',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="container mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
