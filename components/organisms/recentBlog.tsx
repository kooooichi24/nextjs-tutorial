import Anchor from "../atoms/anchor";
import DateArea from "../atoms/dateArea";
import Heading from "../atoms/heading";

type Props = {
  postedAt: Date;
  tagName: string;
  tagUrl: string;
  blogTitle: string;
  blogUrl: string;
  author: string;
  authorImage: string;
};

const RecentBlog = (props: Props) => {
  const { postedAt, tagName, tagUrl, blogTitle, blogUrl, author, authorImage } =
    props;

  return (
    <div>
      <Heading level={1}>Recent Post</Heading>
      <div>
        <div>
          <Anchor href={tagUrl}>{tagName}</Anchor>
        </div>
        <div>
          <Anchor href={blogUrl}>{blogTitle}</Anchor>
        </div>
        <div>
          <div>
            <img src={authorImage} alt="avatar"></img>
            <Anchor href="#">{author}</Anchor>
          </div>
          <DateArea date={postedAt}></DateArea>&nbsp;
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
