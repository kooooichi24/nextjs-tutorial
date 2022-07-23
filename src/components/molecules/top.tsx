import { useState } from "react";
import Heading from "../atoms/heading";
import Select from "../atoms/select";

type Props = {
  className?: string;
};

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

const Top = (props: Props) => {
  const { className } = props;
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <div className={className}>
      <Heading
        className="text-xl font-bold text-gray-700 md:text-2xl"
        level={1}
      >
        Post
      </Heading>
      <div>
        <Select
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    </div>
  );
};

export default Top;
