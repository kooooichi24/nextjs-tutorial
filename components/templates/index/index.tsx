import Top from "../../../components/molecules/top";
import Copyright from "../../../components/molecules/copyright";
import Nav from "../../../components/molecules/nav";
import Pagination from "../../../components/molecules/pagination";
import AuthorList from "../../../components/organisms/authorList";
import CategoryList from "../../../components/organisms/categoryList";
import RecentBlog from "../../../components/organisms/recentBlog";
import Footer from "../../../components/organisms/footer";
import BlogList from "../../../components/organisms/blogList";
import { Blog } from "../../../types/index";

type Props = {
  blogs: Blog[];
  recentBlog: Blog;
};

const IndexTemplate = (props: Props) => {
  const { blogs, recentBlog } = props;

  return (
    <>
      <Copyright />
      <Nav />
      <Top />
      <BlogList blogs={blogs} />
      <Pagination total={blogs.length} />
      <AuthorList blogs={blogs} />
      <CategoryList blogs={blogs} />
      <RecentBlog
        postedAt={recentBlog.postedAt}
        tagName={recentBlog.tagName}
        tagUrl={recentBlog.tagUrl}
        blogTitle={recentBlog.title}
        blogUrl={recentBlog.blogUrl}
        author={recentBlog.blogAuthor}
        authorImage={recentBlog.authorImage}
      />
      <Footer />
    </>
  );
};

export default IndexTemplate;
