import Anchor from "../atoms/anchor";

type Props = {
  imageUrl: string;
  authorUrl: string;
  name: string;
  posts: number;
};

const AuthorInfo = (props: Props) => {
  const { imageUrl, authorUrl, name, posts } = props;

  return (
    <>
      <img src={imageUrl} alt="avatar" />
      <p>
        <Anchor href={authorUrl}>{name}</Anchor>
        <span>Created {posts} posts</span>
      </p>
    </>
  );
};

export default AuthorInfo;
