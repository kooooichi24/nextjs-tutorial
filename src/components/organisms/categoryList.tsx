import Anchor from "../atoms/anchor";
import Heading from "../atoms/heading";
import { Blog } from "../../../src/types/index";

type Props = {
  blogs: Blog[];
  className?: string;
};

const CategoryList = (props: Props) => {
  const { blogs, className } = props;

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

  const style = (i: number, total: number) => {
    if (i === 0) return "";
    else if (i === total - 1 || i === total - 2)
      return "flex items-center mt-2";
    else return "mt-2";
  };

  return (
    <div className={className}>
      <Heading className="mb-4 text-xl font-bold text-gray-700" level={1}>
        Categories
      </Heading>

      <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
        <ul>
          {categories().map((v, i) => (
            <li key={i} className={style(i, categories().length)}>
              <Anchor
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                href={v.url}
              >
                - {v.category}
              </Anchor>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
