import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';


export const config = {
  matcher: [
    '/propagations/:path*',
    '/recordings/:path*',
    '/samples/:path*'
  ]
};

export default async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return NextResponse.next();
}
