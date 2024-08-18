'use client';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status !== 'authenticated') {
      router.push('/login');
    }
  }, [session.status, router]);

  return <div>{children}</div>;
};

export default Layout;
