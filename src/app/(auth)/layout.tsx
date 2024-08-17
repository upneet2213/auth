import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (session) {
    redirect('/home');
  }
  return <div>{children}</div>;
};

export default AuthLayout;
