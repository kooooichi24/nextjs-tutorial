import Anchor from "../atoms/anchor";
import Button from "../atoms/button";
import Path from "../atoms/path";
import Svg from "../atoms/svg";

const Nav = () => {
  return (
    <nav>
      <div>
        <div>
          <Anchor href="#">Brand</Anchor>
          <Button type="button">
            <Svg viewBox="0 0 24 24">
              <Path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </Svg>
          </Button>
        </div>
        <div>
          <Anchor href="#">Home</Anchor>
          <Anchor href="#">Blog</Anchor>
          <Anchor href="#">About us</Anchor>
        </div>
      </div>
      This a Blog Page by khatabwedaa.&nbsp;
      <Anchor href="https://tailwindcomponents.com/component/blog-page">
        Component details
      </Anchor>
    </nav>
  );
};

export default Nav;
