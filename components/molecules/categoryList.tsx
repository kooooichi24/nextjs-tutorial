import Anchor from "../atoms/anchor";
import Heading from "../atoms/heading";

type Props = {
  blogInfos: any;
};

const CategoryList = (props: Props) => {
  const { blogInfos } = props;

  const categories = () => {
    const obj = blogInfos.map((b) => {
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
