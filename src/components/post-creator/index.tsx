import React from 'react';
import { Input } from '../ui/input';

const PostCreator = () => {
  return (
    <div className='rounded-lg px-5 py-6 bg-dark-1'>
      <h2 className='text-lg text-dark-3 font-medium'>Create Post</h2>
      <div className='mt-5 p-4 bg-dark-2 rounded-lg flex gap-4 items-center'>
        <div className='w-12 h-12  bg-dark-1 shrink-0 rounded-full flex items-center justify-center '>
          💬
        </div>
        <Input
          className='bg-dark-2 border-0'
          placeholder='Enter what is on your mind...'
        />
      </div>
    </div>
  );
};

export default PostCreator;
