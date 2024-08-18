'use client';

import LoginModal from '@/src/components/login-modal';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/src/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginInter() {
  const router = useRouter();

  return (
    <AlertDialog open={true} onOpenChange={() => router.back()}>
      <AlertDialogTitle className='hidden'>Login</AlertDialogTitle>
      <AlertDialogContent className='p-0 border-0'>
        <AlertDialogDescription className='hidden'>
          Log in to see posts
        </AlertDialogDescription>
        <LoginModal />
      </AlertDialogContent>
    </AlertDialog>
  );
}
