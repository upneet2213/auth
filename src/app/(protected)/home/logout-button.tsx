'use client';

import { Button } from '@/src/components/ui/button';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()} className='mt-10'>
      Logout
    </Button>
  );
};

export default LogoutButton;
