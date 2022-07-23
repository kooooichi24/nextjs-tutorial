type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  level: 1 | 2 | 3 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Heading = (props: Props) => {
  const { level, children, className } = props;
  const CustomTag = `h${level}` as HeadingTag;

  return <CustomTag className={className}>{children}</CustomTag>;
};

export default Heading;
