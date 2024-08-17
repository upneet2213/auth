'use client';
import HomePage from '@/src/components/home-page';
import { PostProps } from '@/src/components/post/post.types';
import SignupModal from '@/src/components/signup-modal';
import {
  AlertDialog,
  AlertDialogContent,
} from '@/src/components/ui/alert-dialog';
import { samplePosts } from '@/src/sampleData';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function SignupInter() {
  const router = useRouter();

  return (
    <>
      <HomePage userName='Jane' posts={samplePosts} />
      <AlertDialog open={true} onOpenChange={() => router.back()}>
        <AlertDialogContent className='p-0 border-0'>
          <SignupModal />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
