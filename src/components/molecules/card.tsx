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
      <Anchor className="flex items-center" href={href}>
        <img
          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
          src={src}
          alt="avatar"
        ></img>
        <Heading className="font-bold text-gray-700 hover:underline" level={1}>
          {name}
        </Heading>
      </Anchor>
    </div>
  );
};

export default Card;
