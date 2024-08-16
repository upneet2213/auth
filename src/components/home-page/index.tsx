import React from 'react';
import PostCreator from '../post-creator';
import Post from '../post';
import { HomePageProps } from './home-page.types';

const HomePage: React.FC<HomePageProps> = ({ userName, posts }) => {
  return (
    <div className='w-full pt-[69px] px-10 lg:px-[370px]'>
      <h1 className='text-dark-3 text-5xl font-medium mb-3 mx-auto'>
        Hello Jane
      </h1>
      <p className='text-dark-4'>
        How are you doing today? Would you like to share something with the
        community 🤗
      </p>
      <div className='flex flex-col gap-4 mt-10'>
        <PostCreator />
        {posts.map((post) => {
          return (
            <Post
              key={post.user.name + post.postedAt}
              user={post.user}
              content={post.content}
              numberOfComments={post.numberOfComments}
              reaction={post.reaction}
              postedAt={post.postedAt}
              isEdited={post.isEdited}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
