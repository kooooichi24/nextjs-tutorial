import Heading from "../atoms/heading";
import AuthorInfo from "../molecules/authorInfo";
import { Blog } from "../../../src/types/index";

type Props = {
  blogs: Blog[];
  className?: string;
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
  const { blogs, className } = props;
  const countPerAuthor: PostsPerAuthor[] = countPostsByAuthor(blogs);

  const style = (i: number) => {
    return i === 0 ? "flex items-center" : "flex items-center mt-6";
  };

  return (
    <div className={className}>
      <Heading className="mb-4 text-xl font-bold text-gray-700" level={1}>
        Authors
      </Heading>

      <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
        <ul className="-mx-4">
          {countPerAuthor.map((d, i) => (
            <li className={style(i)} key={i}>
              <AuthorInfo
                imageUrl={d.imageUrl}
                authorUrl={d.authorUrl}
                name={d.author}
                posts={d.count}
              ></AuthorInfo>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorList;
