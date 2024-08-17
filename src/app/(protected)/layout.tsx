'use client';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session = useSession();

  if (session.status !== 'authenticated') {
    router.push('/login');
  }
  return <div>{children}</div>;
};

export default Layout;
