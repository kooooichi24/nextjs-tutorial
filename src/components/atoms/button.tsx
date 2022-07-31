export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
} as const;
export const ButtonColor = {
  RED: "red",
  BLUE: "blue",
  GREEN: "green",
} as const;
export const ButtonSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

type ButtonType = typeof ButtonType[keyof typeof ButtonType];
type ButtonColor = typeof ButtonColor[keyof typeof ButtonColor];
type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];

const ButtonColorMap: Record<ButtonColor, string> = {
  [ButtonColor.RED]: "bg-red-600",
  [ButtonColor.BLUE]: "bg-blue-600",
  [ButtonColor.GREEN]: "bg-green-600",
};
const ButtonSizeMap: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: "p-2",
  [ButtonSize.MEDIUM]: "p-3",
  [ButtonSize.LARGE]: "p-4",
};

type Props = {
  children: React.ReactNode;
  color?: ButtonColor;
  type: ButtonType;
  size: ButtonSize;
  disabled: boolean;
  onClick: Function;
  className?: string;
};

const Button = (props: Props) => {
  const { children, color, type, size, disabled, onClick, className } = props;

  return (
    <button
      className={`${className} ${ButtonColorMap[color]} ${ButtonSizeMap[size]} disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: ButtonType.BUTTON,
  disabled: false,
  onClick: () => {},
};

export default Button;
