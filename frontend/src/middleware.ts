import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Ví dụ: Bảo vệ trang admin
  if (url.pathname.startsWith('/admin')) {
    const token = req.cookies.get('auth_token');
    if (!token) {
      url.pathname = '/auth/login';
      return NextResponse.redirect(url);
    }
  }
}
