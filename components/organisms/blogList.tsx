import BlogInfo from "../molecules/blogInfo";
import Card from "../molecules/card";

type Props = {
  blogsInfo: any;
};

const BlogList = (props: Props) => {
  const { blogsInfo } = props;

  return (
    <>
      {blogsInfo.map((blog, i) => (
        <div key={i}>
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
      ))}
    </>
  );
};

export default BlogList;
