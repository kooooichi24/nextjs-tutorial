import Anchor from "../atoms/anchor";

type Props = {
  current?: number;
  pageSize?: number;
  total: number;
  defaultCurrent?: number;
  defaultPageSize?: number;
};

const Pagination = (props: Props) => {
  const { current, pageSize, total, defaultCurrent, defaultPageSize } = props;
  const pageLists = () => {
    const totalPages = Math.floor(total / (pageSize || defaultPageSize)) || 1;
    return Array.from(Array(totalPages).keys()).map((n) => n + 1);
  };

  return (
    <div className="mt-8">
      <div className="flex">
        <Anchor
          className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
          href="#"
        >
          previous
        </Anchor>
        {pageLists().map((p) => (
          <Anchor
            key={p}
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
            href="#"
          >
            {p}
          </Anchor>
        ))}
        <Anchor
          className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          href="#"
        >
          next
        </Anchor>
      </div>
    </div>
  );
};

Pagination.defaultProps = {
  total: 0,
  defaultCurrent: 1,
  defaultPageSize: 5,
};

export default Pagination;
