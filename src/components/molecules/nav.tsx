import Anchor from "../atoms/anchor";
import { HumbugerButton } from "../atoms/HumbugerButton/HumbugerButton";

type Props = {
  className: string;
};

const Nav = (props: Props) => {
  const { className } = props;

  return (
    <nav className={className}>
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Anchor
              className="text-xl font-bold text-gray-800 md:text-2xl"
              href="#"
            >
              Brand
            </Anchor>
          </div>
          <div>
            <HumbugerButton
              size="medium"
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
            />
          </div>
        </div>
        <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
          <Anchor
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            href="#"
          >
            Home
          </Anchor>
          <Anchor
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            href="#"
          >
            Blog
          </Anchor>
          <Anchor
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            href="#"
          >
            About us
          </Anchor>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
