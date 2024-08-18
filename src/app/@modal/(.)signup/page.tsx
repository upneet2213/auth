'use client';

import SignupModal from '@/src/components/signup-modal';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/src/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SignupInter() {
  const router = useRouter();

  return (
    <AlertDialog open={true} onOpenChange={() => router.back()}>
      <AlertDialogTitle className='hidden'>Sign Up </AlertDialogTitle>
      <AlertDialogContent className='p-0 border-0'>
        <AlertDialogDescription className='hidden'>
          Sign up
        </AlertDialogDescription>
        <SignupModal />
      </AlertDialogContent>
    </AlertDialog>
  );
}
