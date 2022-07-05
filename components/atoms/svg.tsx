type Props = {
  viewBox: string;
  children: React.ReactNode;
};

const Svg = (props: Props) => {
  const { viewBox, children } = props;

  return <svg viewBox={viewBox}>{children}</svg>;
};

export default Svg;
