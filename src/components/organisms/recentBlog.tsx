import Anchor from "../atoms/anchor";
import DateArea from "../atoms/dateArea";
import Heading from "../atoms/heading";

type Props = {
  postedAt: string;
  tagName: string;
  tagUrl: string;
  blogTitle: string;
  blogUrl: string;
  author: string;
  authorImage: string;
  className?: string;
};

const RecentBlog = (props: Props) => {
  const {
    postedAt,
    tagName,
    tagUrl,
    blogTitle,
    blogUrl,
    author,
    authorImage,
    className,
  } = props;

  return (
    <div className={className}>
      <Heading className="mb-4 text-xl font-bold text-gray-700" level={1}>
        Recent Post
      </Heading>
      <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <Anchor
            className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
            href={tagUrl}
          >
            {tagName}
          </Anchor>
        </div>
        <div className="mt-4">
          <Anchor
            className="text-lg font-medium text-gray-700 hover:underline"
            href={blogUrl}
          >
            {blogTitle}
          </Anchor>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={authorImage}
              alt="avatar"
            ></img>
            <Anchor
              className="mx-3 text-sm text-gray-700 hover:underline"
              href="#"
            >
              {author}
            </Anchor>
          </div>
          <DateArea
            className="text-sm font-light text-gray-600"
            date={postedAt}
          ></DateArea>
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
