import Heading from "../atoms/heading";
import AuthorInfo from "./authorInfo";

type Props = {
  blogInfos: any;
};

const AuthorsList = (props: Props) => {
  const { blogInfos } = props;

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
  const countedData = countPostsByAuthor(blogInfos);

  return (
    <>
      <Heading level={1}>Authors</Heading>

      <ul>
        {countedData.map((d, i) => (
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

export default AuthorsList;
