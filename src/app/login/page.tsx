'use client';

import LoginModal from '@/src/components/login-modal';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const user = getCookie('authToken');
  if (user) {
    router.replace('/home');
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <LoginModal />
    </div>
  );
}
