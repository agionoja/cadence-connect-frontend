import { MdKeyboardArrowUp } from "react-icons/md";

type props = {
  className?: string;
  color?: string;
  size?: number;
};

export default function ArrowUp({ className, color, size }: props) {
  return <MdKeyboardArrowUp className={className} color={color} size={size} />;
}
