type Props = {
  href?: string | undefined;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  children: React.ReactNode;
};

const Anchor = (props: Props) => {
  const { href, target, rel, children } = props;

  return (
    <a href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

Anchor.defaultProps = {
  target: "_self",
};

export default Anchor;
