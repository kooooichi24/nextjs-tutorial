import Top from "../../../components/molecules/top";
import Copyright from "../../../components/molecules/copyright";
import Nav from "../../../components/molecules/nav";
import Pagination from "../../../components/molecules/pagination";
import AuthorList from "../../../components/organisms/authorList";
import CategoryList from "../../../components/organisms/categoryList";
import RecentBlog from "../../../components/organisms/recentBlog";
import Footer from "../../../components/organisms/footer";
import BlogList from "../../../components/organisms/blogList";
import { Blog } from "../../../../src/types/index";

type Props = {
  blogs: Blog[];
  recentBlog: Blog;
};

const IndexTemplate = (props: Props) => {
  const { blogs, recentBlog } = props;

  return (
    <>
      <div className="left-0 right-0 z-40 px-4 py-3 text-center text-white bg-gray-800">
        <Copyright />
      </div>
      <div className="overflow-x-hidden bg-gray-100">
        <Nav className="px-6 py-4 bg-white shadow" />
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
              <Top className="flex items-center justify-between" />
              <BlogList blogs={blogs} />
              <Pagination total={blogs.length} />
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
              <AuthorList className="px-8" blogs={blogs} />
              <CategoryList className="px-8 mt-10" blogs={blogs} />
              <RecentBlog
                className="px-8 mt-10"
                postedAt={recentBlog.postedAt}
                tagName={recentBlog.tagName}
                tagUrl={recentBlog.tagUrl}
                blogTitle={recentBlog.title}
                blogUrl={recentBlog.blogUrl}
                author={recentBlog.blogAuthor}
                authorImage={recentBlog.authorImage}
              />
            </div>
          </div>
        </div>
        <Footer className="px-6 py-2 text-gray-100 bg-gray-800" />
      </div>
    </>
  );
};

export default IndexTemplate;
