import { Link } from "@remix-run/react";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import ArrowUp from "~/components/arrow-up";
import ArrowDown from "~/components/arrow-down";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);
  return (
    <div className={"relative"}>
      <div className="flex items-center gap-2">
        <button>
          <CgProfile size={20} />
        </button>
        <span>Profile</span>
        <button onClick={handleClick}>
          <span>
            {isOpen ? <ArrowUp size={25} /> : <ArrowDown size={25} />}
          </span>
        </button>
      </div>

      <div
        className={`absolute left-0 right-0 mt-2 flex flex-col items-center gap-2 bg-slate-50 py-4 text-sm lowercase text-gray-500 ${isOpen ? "block" : "hidden"}`}
      >
        <Link to={"account"}>Account</Link>
        <Link to={"/sign-out"}>Sign out</Link>
      </div>
    </div>
  );
}
