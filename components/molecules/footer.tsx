import Anchor from "../atoms/anchor";
import Paragraph from "../atoms/paragraph";
import Path from "../atoms/path";
import Svg from "../atoms/svg";

type Brand = {
  viewBox: string;
  d: string;
  brandUrl: string;
};

type Props = {
  brands: Brand[];
};

const Top = (props: Props) => {
  const { brands } = props;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>
        <Anchor href="#">Brand</Anchor>
        <Paragraph>All rights reserved {currentYear}.</Paragraph>
        <div>
          {brands.map((b) => (
            <Anchor href={b.brandUrl}>
              <Svg viewBox={b.viewBox}>
                <Path d={b.d}></Path>
              </Svg>
            </Anchor>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Top;
