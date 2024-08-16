export type PostProps = {
  user: {
    name: string;
    imageUrl?: string;
  };
  postedAt: number;
  content: string;
  reaction: React.ReactNode;
  numberOfComments: number;
  isEdited?: boolean;
};
