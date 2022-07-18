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
    <>
      <Anchor href="#">previous</Anchor>
      {pageLists().map((p) => (
        <span key={p}>
          <Anchor href="#">{p}</Anchor>
        </span>
      ))}
      <Anchor href="#">next</Anchor>
    </>
  );
};

Pagination.defaultProps = {
  total: 0,
  defaultCurrent: 1,
  defaultPageSize: 5,
};

export default Pagination;
