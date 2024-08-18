import Post from '@/src/components/post';
import PostCreator from '@/src/components/post-creator';
import LogoutButton from './logout-button';
import { samplePosts } from '@/src/sampleData';
import { Metadata } from 'next';

export default function Home() {
  const posts = samplePosts;
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
        {posts.map((post) => (
          <Post
            user={post.user}
            numberOfComments={post.numberOfComments}
            isEdited={post.isEdited}
            content={post.content}
            reaction={post.reaction}
            postedAt={post.postedAt}
            key={post.user.name + post.postedAt}
          />
        ))}
      </div>
      <LogoutButton />
    </div>
  );
}
export const metadata: Metadata = {
  title: 'Home',
  description: 'Your feed of posts',
};
