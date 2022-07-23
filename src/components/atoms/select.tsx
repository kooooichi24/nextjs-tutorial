type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  defaultValue?: Option["value"];
  onChange: Function;
  className?: string;
};

const Select = (props: Props) => {
  const { options, defaultValue, onChange, className } = props;
  const handleChange = (e) => {
    console.log("handle change");
    onChange(e.target.value);
  };

  return (
    <select
      className={className}
      defaultValue={defaultValue}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.label.toString()} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
