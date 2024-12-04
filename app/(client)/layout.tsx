import '@styles/global.css';

import Footers from '@components/footer/Footer';
import GlobalNav from '@components/ui/global-nav';
import { Raleway } from 'next/font/google';

import { Providers } from './provider';
import FooterTop from '@components/ui/footer';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Giá thuê xe 7 chỗ Đà Lạt, thuê xe 16 chỗ Đà Lạt, Đưa đón sân bay, tour nội thành Đà Lạt',
  description: 'Giá Thuê xe 7 chỗ Đà Lạt, thuê xe 16 chỗ Đà Lạt, Đưa đón sân bay, tour nội thành Đà Lạt',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={raleway.className}>
        <Providers>
          <GlobalNav />

          {children}

          <FooterTop />
          <Footers />
        </Providers>
      </body>
    </html>
  );
}
