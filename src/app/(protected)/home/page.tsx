'use client';
import Post from '@/src/components/post';
import PostCreator from '@/src/components/post-creator';
import { PostProps } from '@/src/components/post/post.types';

const samplePosts: PostProps[] = [
  {
    user: {
      name: 'Theresa Webb',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M4jID5JAOyt6VHKNOlRT~o9pKCiJv-0rbXnBuUsTIe4Mbdqx57bZR0g80dqWM59jn6vjxkXq-DlH6F-TGpo44uWpLOoVqJdhLeQLKvWaiTvG12OOuFTphPxqUw-HU-JXKKU60Vw0bJK5pbU-uaAm0jc4Z~T05G2Jn4z32Vtq-BkT4vY7uUUwuIWLrKs8UrFsHT0WsVdYLQMjZwcNzXTlhOOIz9OJHURdLhR9Rw3Md1sdewMxO1jb1ED10uIxp7zmbgKGoJoabD-~2ctqLCHXjotXMDZ4iXn3ykLEX6B65JF2cXVWOeK8FVGVpcaOdLVDn1nwUVFfHkxgYQEks1fyzg__',
    },
    postedAt: 1723743992150,
    numberOfComments: 24,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    reaction: <div>👋</div>,
  },
  {
    user: {
      name: 'Marvin Mckinney',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kbv-xeSAiECZQ4pmaIh~iqGKUdmcjmsHsmBNJSW50ktyzFG7THM2EVGZJ9gWIRyeTOFXDVSey64LHyPHwRtEE4WOJPiLLO-pcw6jzGd9XF9BZ0ue4siyJVud5YXwSq3GuT4zCk8KHZSph3mQljIoZUkgXAHX-a6I~HsIoQ0eWSY2QHdQFNqLoDjGA6MB8qFPtdg6ytyPvOow25u9Jpk1RHVZTOl9B5~z93u40cygIZAzsD9Lr~4yRUsagjJtKG9-455~SLQ0AKKwnPCeOB5buPDfanhlKq22P6O0jIhe8dJqiB0C8FKrmDa9pW6RavqgciIq5iHniH6bbUq4IN1jbA__',
    },
    postedAt: 1723744282960,
    numberOfComments: 24,
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    reaction: <div>😞</div>,
    isEdited: true,
  },
];

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
    </div>
  );
}
