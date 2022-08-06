import { Blog } from "../../../src/types";
import BlogInfo from "../molecules/blogInfo";
import Card from "../molecules/card";

type Props = {
  blogs: Blog[];
};

const BlogList = (props: Props) => {
  const { blogs } = props;

  return (
    <div>
      {blogs.map((blog, i) => (
        <div className="mt-6" key={`blog-${i}`}>
          <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
            <BlogInfo
              postedAt={blog.postedAt}
              tagName={blog.tagName}
              tagUrl={blog.tagUrl}
              blogTitle={blog.title}
              blogAbstract={blog.abstract}
              blogUrl={blog.blogUrl}
            ></BlogInfo>
            <Card
              href={blog.blogUrl}
              src={blog.authorImage}
              name={blog.blogAuthor}
            ></Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
