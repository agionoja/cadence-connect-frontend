import { MdKeyboardArrowDown } from "react-icons/md";

type props = {
  className?: string;
  color?: string;
  size?: number;
};

export default function ArrowDown({ className, color, size }: props) {
  return (
    <MdKeyboardArrowDown className={className} color={color} size={size} />
  );
}
