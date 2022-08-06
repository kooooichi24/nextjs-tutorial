import Path from "../path";
import Svg from "../svg";

type Props = {
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
};

const SizeMap: Record<Props["size"], string> = {
  small: "p-2",
  medium: "p-3",
  large: "p-4",
};

export const HumbugerButton = ({ size = "medium", className }: Props) => {
  return (
    <button
      className={[
        `${className}`,
        `${SizeMap[size]}`,
        "disabled:bg-slate-100",
        "disabled:text-slate-500",
        "disabled:border-slate-200",
        "disabled:shadow-none",
      ].join(" ")}
      type="button"
    >
      <Svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <Path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
      </Svg>
    </button>
  );
};
