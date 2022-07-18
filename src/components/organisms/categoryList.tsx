import Anchor from "../atoms/anchor";
import Heading from "../atoms/heading";
import { Blog } from "../../src/types/index";

type Props = {
  blogs: Blog[];
};

const CategoryList = (props: Props) => {
  const { blogs } = props;

  const categories = () => {
    const obj = blogs.map((b) => {
      return {
        category: b.tagName,
        url: b.tagUrl,
      };
    });

    return obj.filter(
      (x, i, array) =>
        array.findIndex((y) => y.category === x.category && y.url === x.url) ===
        i
    );
  };

  return (
    <>
      <Heading level={1}>Categories</Heading>

      <ul>
        {categories().map((v, i) => (
          <li key={i}>
            <Anchor href={v.url}>- {v.category}</Anchor>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryList;
