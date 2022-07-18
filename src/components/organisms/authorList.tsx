import Heading from "../atoms/heading";
import AuthorInfo from "../molecules/authorInfo";
import { Blog } from "../../../src/types/index";

type Props = {
  blogs: Blog[];
};

type PostsPerAuthor = {
  author: string;
  count: number;
  imageUrl: string;
  authorUrl: string;
};

const countPostsByAuthor = (blogInfos) => {
  const result = [];
  blogInfos.forEach((blog) => {
    const target = result.find((v) => v.author === blog.blogAuthor);
    if (!target) {
      result.push({
        author: blog.blogAuthor,
        count: 1,
        imageUrl: blog.authorImage,
        authorUrl: "#",
      });
      return;
    }
    target.count += 1;
  });
  return result;
};

const AuthorList = (props: Props) => {
  const { blogs } = props;
  const countPerAuthor: PostsPerAuthor[] = countPostsByAuthor(blogs);

  return (
    <>
      <Heading level={1}>Authors</Heading>

      <ul>
        {countPerAuthor.map((d, i) => (
          <li key={i}>
            <AuthorInfo
              imageUrl={d.imageUrl}
              authorUrl={d.authorUrl}
              name={d.author}
              posts={d.count}
            ></AuthorInfo>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorList;
