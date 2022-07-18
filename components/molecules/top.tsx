import { useState } from "react";
import Heading from "../atoms/heading";
import Select from "../atoms/select";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
};

const Top = (props: Props) => {
  const { options } = props;
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <div>
      <Heading level={1}>Post</Heading>
      <div>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        ></Select>
      </div>
    </div>
  );
};

export default Top;
