import cn from "@/helpers/cn";
import Link from "next/link";
import NavBarListItem from "./NavBarListItem";
import { NavBarListItemLinkProps } from "./types";

const NavBarListItemLink = ({
  children,
  className,
  href,
  ...props
}: NavBarListItemLinkProps) => {
  return (
    <NavBarListItem className={cn("p-0", className)}>
      <Link
        href={href}
        className="flex gap-2 items-center rounded-lg p-2 w-full"
        {...props}
      >
        {children}
      </Link>
    </NavBarListItem>
  );
};

export default NavBarListItemLink;
