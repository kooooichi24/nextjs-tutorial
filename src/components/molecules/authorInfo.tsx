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
      <img
        className="object-cover w-10 h-10 mx-4 rounded-full"
        src={imageUrl}
        alt="avatar"
      />
      <p>
        <Anchor
          className="mx-1 font-bold text-gray-700 hover:underline"
          href={authorUrl}
        >
          {name}
        </Anchor>
        <span className="text-sm font-light text-gray-700">
          Created {posts} posts
        </span>
      </p>
    </>
  );
};

export default AuthorInfo;
