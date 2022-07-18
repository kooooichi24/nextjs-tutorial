import IndexTemplate from "../components/templates/index/index";
import { Blog } from "../types/index";
import json from "../data/data.json";

const blogs: Blog[] = json.data;

export default function Index() {
  const recentBlog = blogs.sort((a, b) => (a.postedAt > b.postedAt ? 1 : 0))[0];

  return (
    <>
      <IndexTemplate blogs={blogs} recentBlog={recentBlog} />
    </>
  );
}
