type Props = {
  d: string;
};

const Path = (props: Props) => {
  const { d } = props;

  return <path d={d} />;
};

export default Path;
