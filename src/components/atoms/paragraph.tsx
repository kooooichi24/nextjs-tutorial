type Props = {
  children: React.ReactNode;
  className?: string;
};

const Paragraph = (props: Props) => {
  const { children, className } = props;

  return <p className={className}>{children}</p>;
};

export default Paragraph;
