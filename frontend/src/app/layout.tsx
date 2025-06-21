import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeLayout from '@/components/layouts/HomeLayout';

// Import các CSS từ thư mục public
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Tạp Hóa Xanh - Thực Phẩm Sạch",
  description: "Tạp Hóa Xanh - Cung cấp thực phẩm sạch, an toàn cho sức khỏe",
  keywords: 'thực phẩm sạch, rau củ quả, thịt cá, đồ khô, gia vị',
  icons: {
    icon: '/client/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Tạp Hóa Xanh - Cung cấp thực phẩm sạch, an toàn cho sức khỏe" />
        <meta name="keywords" content="thực phẩm sạch, rau củ quả, thịt cá, đồ khô, gia vị" />
        <meta name="author" content="Tạp Hóa Xanh" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/client/images/favicon.png" type="image/png" />
        <link rel="stylesheet" href="/client/css/all.min.css" />
        <link rel="stylesheet" href="/client/css/hover-min.css" />
        <link rel="stylesheet" href="/client/css/flag-icons.min.css" />
        <link rel="stylesheet" href="/client/css/style.css" />
        <link rel="stylesheet" href="/client/fonts/fontstyle.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
