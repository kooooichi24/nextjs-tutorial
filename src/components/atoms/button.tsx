export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

type Props = {
  type: "button" | "reset" | "submit";
  children: React.ReactNode;
  disabled: boolean;
  className?: string;
};

const Button = (props: Props) => {
  const { type, children, disabled, className } = props;

  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  disabled: false,
};

export default Button;
