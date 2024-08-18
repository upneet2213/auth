import LoginModal from '@/src/components/login-modal';
import { Metadata } from 'next';

export default async function Login() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <LoginModal />
    </div>
  );
}
export const metadata: Metadata = {
  title: 'Log In',
  description: 'Log In to see posts',
};
