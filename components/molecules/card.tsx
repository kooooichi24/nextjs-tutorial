import Anchor from "../atoms/anchor";
import Heading from "../atoms/heading";

type Props = {
  href: string;
  src: string;
  name: string;
};

const Card = (props: Props) => {
  const { href, src, name } = props;

  return (
    <div>
      <Anchor href={href}>
        <img src={src} alt="avatar"></img>
        <Heading level={1}>{name}</Heading>
      </Anchor>
    </div>
  );
};

export default Card;
