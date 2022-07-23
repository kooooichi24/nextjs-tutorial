type Props = {
  viewBox: string;
  children: React.ReactNode;
  className?: string;
};

const Svg = (props: Props) => {
  const { viewBox, children, className } = props;

  return (
    <svg className={className} viewBox={viewBox}>
      {children}
    </svg>
  );
};

export default Svg;
