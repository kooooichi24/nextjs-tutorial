type Props = {
  children: React.ReactNode;
};

const Paragraph = (props: Props) => {
  const { children } = props;

  return <p>{children}</p>;
};

export default Paragraph;
