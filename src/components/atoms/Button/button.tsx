type ButtonProps = {
  children: React.ReactNode;
  color?: "red" | "blue" | "green";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const ButtonSizeMap: Record<ButtonProps["size"], string> = {
  small: "p-2",
  medium: "p-3",
  large: "p-4",
};

export const Button = ({
  children,
  color,
  size = "medium",
  disabled = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={[
        `${className}`,
        `bg-${color}-600`,
        `${ButtonSizeMap[size]}`,
        "disabled:bg-slate-100",
        "disabled:text-slate-500",
        "disabled:border-slate-200",
        "disabled:shadow-none",
      ].join(" ")}
      type="button"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
