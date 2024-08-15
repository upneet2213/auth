export type PostProps = {
  user: {
    firstName: string;
    lastName: string;
    imageUrl?: string;
  };
  postedAt: number;
  content: string;
  reaction: React.ReactNode;
  numberOfComments: number;
  isEdited?: boolean;
};
