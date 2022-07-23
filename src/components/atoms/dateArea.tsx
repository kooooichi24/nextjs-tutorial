type Props = {
  date: string;
  className?: string;
};

const DateArea = (props: Props) => {
  const { date, className } = props;

  // TODO: formatもオブションで変更できると良い
  const formatDate = (date: string) => {
    // example format: Jun 1, 2020
    const converted = new Date(date);
    const formatter = new Intl.DateTimeFormat("en-US", { month: "short" });
    const month = formatter.format(converted);
    return month + " " + converted.getDay() + ", " + converted.getFullYear();
  };

  return <span className={className}>{formatDate(date)}</span>;
};

export default DateArea;
