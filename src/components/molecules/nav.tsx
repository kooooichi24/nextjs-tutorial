import Anchor from "../atoms/anchor";
import Button from "../atoms/button";
import Path from "../atoms/path";
import Svg from "../atoms/svg";

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
            <Button className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden" type="button">
              <Svg viewBox="0 0 24 24">
                <Path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </Svg>
            </Button>
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
