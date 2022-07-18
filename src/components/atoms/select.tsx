type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  defaultValue?: Option["value"];
  onChange: Function;
};

const Select = (props: Props) => {
  const { options, defaultValue, onChange } = props;
  const handleChange = (e) => {
    console.log("handle change");
    onChange(e.target.value);
  };

  return (
    <select defaultValue={defaultValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.label.toString()} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
