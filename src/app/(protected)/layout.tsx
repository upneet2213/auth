'use client';
import { getCookie } from 'cookies-next';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const user = getCookie('authToken');
  const router = useRouter();

  if (!user) {
    router.replace('/login');
  }
  return <div>{children}</div>;
};

export default Layout;
