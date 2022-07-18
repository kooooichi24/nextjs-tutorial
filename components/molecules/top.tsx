import { useState } from "react";
import Heading from "../atoms/heading";
import Select from "../atoms/select";

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  {
    label: "Latest",
    value: "Latest",
  },
  {
    label: "Last Week",
    value: "Last Week",
  },
];

const Top = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <div>
      <Heading level={1}>Post</Heading>
      <div>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
};

export default Top;
