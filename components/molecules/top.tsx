import Heading from "../atoms/heading";
import Select from "../atoms/select";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  defaultValue?: Option["value"];
  onChange: Function;
};

const Top = (props: Props) => {
  const { options, defaultValue, onChange } = props;

  return (
    <div>
      <Heading level={1}>Post</Heading>
      <div>
        <Select
          defaultValue={defaultValue}
          onChange={onChange}
          options={options}
        ></Select>
      </div>
    </div>
  );
};

export default Top;
