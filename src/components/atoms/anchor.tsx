type Props = {
  href?: string | undefined;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  children: React.ReactNode;
  className?: string;
};

const Anchor = (props: Props) => {
  const { href, target, rel, children, className } = props;

  return (
    <a className={className} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};

Anchor.defaultProps = {
  target: "_self",
};

export default Anchor;
