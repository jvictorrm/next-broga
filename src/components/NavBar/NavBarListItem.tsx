import cn from "@/helpers/cn";
import { NavBarListItemProps } from "./types";

const NavBarListItem = ({
  children,
  className,
  ...props
}: NavBarListItemProps) => {
  return (
    <li
      className={cn(
        "my-2 rounded-lg bg-transparent hover:bg-slate-800 hover:text-slate-100 p-2 cursor-pointer flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};

export default NavBarListItem;
