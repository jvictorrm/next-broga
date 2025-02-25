import LogoIcon from "@/assets/game-console-gamer-svgrepo-com.svg";
import AwardIcon from "@/components//Icons/AwardIcon";
import FaceHappyIcon from "@/components//Icons/FaceHappyIcon";
import GamepadIcon from "@/components/Icons/GamepadIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import RouteIcon from "@/components/Icons/RouteIcon";
import cn from "@/helpers/cn";
import Image from "next/image";
import NavBarList from "./NavBarList";
import NavBarListItemLink from "./NavBarListItemLink";
import { NavBarProps } from "./types";

const Navbar = ({ className, user, ...props }: NavBarProps) => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 flex h-screen flex-col gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center">
        <Image src={LogoIcon} alt="logo" className="max-w-full w-28 h-28 p-2" />
      </div>
      <NavBarList className="flex-grow">
        <NavBarListItemLink href="/">
          <HomeIcon className="w-4 h-4" /> Home
        </NavBarListItemLink>
        <NavBarListItemLink href="/games">
          <GamepadIcon className="w-4 h-4" /> Games
        </NavBarListItemLink>
        <NavBarListItemLink href="/top-10">
          <AwardIcon className="w-4 h-4" /> Top 10
        </NavBarListItemLink>
        <NavBarListItemLink href="/walkthroughts">
          <RouteIcon className="w-4 h-4" /> Walkthroughts
        </NavBarListItemLink>
      </NavBarList>
      <NavBarList>
        {!user ? (
          <NavBarListItemLink href="/auth/sign-in">
            <FaceHappyIcon className="w-4 h-4" /> Log In
          </NavBarListItemLink>
        ) : (
          <NavBarListItemLink href="/user">
            <FaceHappyIcon className="w-4 h-4" /> {user.name}
          </NavBarListItemLink>
        )}
      </NavBarList>
    </nav>
  );
};

export default Navbar;
