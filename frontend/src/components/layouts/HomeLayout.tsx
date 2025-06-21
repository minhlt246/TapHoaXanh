'use client';

import { ReactNode } from 'react';
import HomeHeader from '../headers/HomeHeader';
import Footer from '../footer';

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 