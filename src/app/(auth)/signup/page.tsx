import SignupModal from '@/src/components/signup-modal';
import { Metadata } from 'next';

export default function Signup() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <SignupModal />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Create account',
  description: 'Create your account',
};
