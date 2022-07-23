import Anchor from "../atoms/anchor";
import DateArea from "../atoms/dateArea";
import Paragraph from "../atoms/paragraph";

type Props = {
  postedAt: string;
  tagName: string;
  tagUrl: string;
  blogTitle: string;
  blogUrl: string;
  blogAbstract: string;
};

const BlogInfo = (props: Props) => {
  const { postedAt, tagName, tagUrl, blogTitle, blogUrl, blogAbstract } = props;

  return (
    <>
      <div className="flex items-center justify-between">
        <DateArea
          className="font-light text-gray-600"
          date={postedAt}
        ></DateArea>
        &nbsp;
        <Anchor
          className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
          href={tagUrl}
        >
          {tagName}
        </Anchor>
      </div>
      <div className="mt-2">
        <Anchor
          className="text-2xl font-bold text-gray-700 hover:underline"
          href={blogUrl}
        >
          {blogTitle}
        </Anchor>
        <Paragraph className="mt-2 text-gray-600">{blogAbstract}</Paragraph>
        <Anchor className="text-blue-500 hover:underline" href={blogUrl}>
          Read more
        </Anchor>
      </div>
    </>
  );
};

export default BlogInfo;
