import Anchor from "../atoms/anchor";
import DateArea from "../atoms/dateArea";
import Paragraph from "../atoms/paragraph";

type Props = {
  postedAt: Date;
  tagName: string;
  tagUrl: string;
  blogTitle: string;
  blogUrl: string;
  blogAbstract: string;
};

const BlogInfo = (props: Props) => {
  const { postedAt, tagName, tagUrl, blogTitle, blogUrl, blogAbstract } = props;

  return (
    <div>
      <div>
        <DateArea date={postedAt}></DateArea>&nbsp;
        <Anchor href={tagUrl}>{tagName}</Anchor>
      </div>
      <div>
        <Anchor href={blogUrl}>{blogTitle}</Anchor>
        <Paragraph>{blogAbstract}</Paragraph>
        <Anchor href={blogUrl}>Read more</Anchor>
      </div>
    </div>
  );
};

export default BlogInfo;
