import { MessageSquare } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PostProps } from './post.types';

const Post: React.FC<PostProps> = ({
  user,
  postedAt,
  content,
  reaction,
  numberOfComments,
  isEdited,
}) => {
  const now = Date.now();
  const postedAtDifference = Math.floor((now - postedAt) / 1000); // in seconds

  let timeAgo;
  if (postedAtDifference < 60) {
    timeAgo = `${postedAtDifference} seconds ago`;
  } else if (postedAtDifference < 3600) {
    timeAgo = `${Math.floor(postedAtDifference / 60)} minutes ago`;
  } else if (postedAtDifference < 86400) {
    timeAgo = `${Math.floor(postedAtDifference / 3600)} hours ago`;
  } else {
    timeAgo = `${Math.floor(postedAtDifference / 86400)} days ago`;
  }
  return (
    <div className='rounded-lg px-5 py-6 bg-dark-1'>
      <div className='flex items-center gap-4'>
        <Image
          src={user.imageUrl ?? ''}
          alt='profile-photo'
          width={44}
          height={44}
          className='rounded-full w-11 h-11 object-contain'
        />
        <div>
          <p className='text-dark-3 mb-1'>{user.name}</p>
          <div className='text-dark-4 text-sm flex items-center'>
            <p>{timeAgo}</p>
            {isEdited && (
              <>
                <div className='h-1 w-1 rounded-full bg-dark-3 mx-1'></div>
                <span>Edited</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='mt-5 p-4 bg-dark-2 rounded-lg flex gap-4 items-start'>
        <div className='w-12 h-12  bg-dark-1 shrink-0 rounded-full flex items-center justify-center'>
          {reaction}
        </div>
        <p className='text-dark-4'>{content}</p>
      </div>
      <div className='flex items-center gap-2 mt-3.5'>
        <MessageSquare size={20} className='stroke-[#C5C7CA]' />
        <span className='text-dark-4 text-sm font-medium'>
          {numberOfComments} comments
        </span>
      </div>
    </div>
  );
};

export default Post;
