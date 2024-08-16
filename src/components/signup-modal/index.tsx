import React, { useRef } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';

const SignupSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Please enter an email'),
  userName: z
    .string({ required_error: 'Username is required' })
    .min(1, 'Please enter a username'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must contain at least 8 letters'),
});

const SignupModal = () => {
  const loginForm = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: '',
      userName: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof SignupSchema>) => {
    console.log(data);
  };
  return (
    <div className='w-[463px] min-h-[506px] mx-auto py-10 px-6 border-gray-500 border-2 bg-dark-1 rounded-lg'>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)}>
          <div className='flex flex-col items-center'>
            <h2 className='text-dark-2 text-sm font-medium'>SIGN UP</h2>
            <h1 className='text-dark-1 text-lg font-semibold'>
              Create an account to continue
            </h1>
          </div>

          <div className='mt-11'>
            <FormField
              control={loginForm.control}
              name='email'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className='text-sm font-medium text-dark-3'>
                      Email or Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your email or username'
                        className='bg-dark-1 border-dark-1'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className='mt-4'>
            <FormField
              control={loginForm.control}
              name='userName'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className='text-sm font-medium text-dark-3'>
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your email or username'
                        className='bg-dark-1 border-dark-1'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div className='mt-4'>
            <FormField
              control={loginForm.control}
              name='password'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className='text-sm font-medium text-dark-3'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter your password'
                        className='bg-dark-1 border-dark-1'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <Button type='submit' className='w-full mt-5 mb-3'>
            Continue
          </Button>
          <span className='text-dark-4 text-sm font-medium'>
            Already have an account?{' '}
            <Link href='/login'>
              <span>{`Login->`}</span>
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
};

export default SignupModal;
