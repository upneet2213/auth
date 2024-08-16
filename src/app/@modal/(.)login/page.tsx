'use client';
import LoginModal from '@/src/components/login-modal';

import {
  AlertDialog,
  AlertDialogContent,
} from '@/src/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LoginInter() {
  const router = useRouter();

  return (
    <AlertDialog open={true} onOpenChange={() => router.back()}>
      <AlertDialogContent className='p-0 border-0'>
        <LoginModal />
      </AlertDialogContent>
    </AlertDialog>
  );
}
