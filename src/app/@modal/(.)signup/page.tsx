'use client';
import SignupModal from '@/src/components/signup-modal';
import {
  AlertDialog,
  AlertDialogContent,
} from '@/src/components/ui/alert-dialog';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SignupInter() {
  const router = useRouter();

  return (
    <AlertDialog open={true} onOpenChange={() => router.back()}>
      <AlertDialogContent className='p-0 border-0'>
        here
        <SignupModal />
      </AlertDialogContent>
    </AlertDialog>
  );
}
