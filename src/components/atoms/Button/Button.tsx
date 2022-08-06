export type Props = {
  label: string;
  color?: "red" | "blue";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
};

const sizeMap: Record<Props["size"], string> = {
  small: "py-2 px-3",
  medium: "py-3 px-5",
  large: "py-4 px-6",
};

const backgroundMap: Record<Props["color"], string> = {
  red: "bg-red-500 hover:bg-red-700",
  blue: "bg-blue-500 hover:bg-blue-700",
};

export const Button = ({
  label,
  color = "blue",
  size = "medium",
  disabled = false,
}: Props) => {
  return (
    <button
      className={[
        `${sizeMap[size]}`,
        `${backgroundMap[color]}`,
        "text-white",
        "font-bold",
        "rounded-full",
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",
      ].join(" ")}
      type="button"
      disabled={disabled}
    >
      {label}
    </button>
  );
};
