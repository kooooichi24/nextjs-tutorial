type Props = {
  date: Date;
};

const DateArea = (props: Props) => {
  const { date } = props;

  // TODO: formatもオブションで変更できると良い
  const formatDate = (date: Date) => {
    // example format: Jun 1, 2020
    const formatter = new Intl.DateTimeFormat("en-US", { month: "short" });
    const month = formatter.format(date);
    return month + " " + date.getDay() + ", " + date.getFullYear();
  };

  return <span>{formatDate(date)}</span>;
};

export default DateArea;
