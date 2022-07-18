export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

type Props = {
  type: "button" | "reset" | "submit";
  children: React.ReactNode;
  disabled: boolean;
};

const Button = (props: Props) => {
  const { type, children, disabled } = props;

  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  disabled: false,
};

export default Button;
