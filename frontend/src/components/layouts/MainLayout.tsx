'use client';

import { ReactNode } from 'react';
import MainHeader from '../headers/MainHeader';
import Footer from '../footer';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
} 