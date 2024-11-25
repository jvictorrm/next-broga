import cn from "@/helpers/cn";
import { NavBarListProps } from "./types";

const NavBarList = ({ children, className, ...props }: NavBarListProps) => {
  return (
    <ul
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export default NavBarList;
