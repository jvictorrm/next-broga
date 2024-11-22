import LogoIcon from "@/assets/game-console-gamer-svgrepo-com.svg";
import AwardIcon from "@/components//Icons/AwardIcon";
import FaceHappyIcon from "@/components//Icons/FaceHappyIcon";
import GamepadIcon from "@/components/Icons/GamepadIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import RouteIcon from "@/components/Icons/RouteIcon";
import cn from "@/utils/cn";
import Image from "next/image";

const NavBarList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ul
      className={cn(
        "my-4 border-t border-indigo-400/20 hover:border-indigo-400/40",
        className
      )}
    >
      {children}
    </ul>
  );
};

const NavBarListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 hover:text-slate-100 p-2 cursor-pointer flex gap-2 items-center">
      {children}
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="flex h-screen flex-col gap-4 bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300">
      <div className="flex items-center justify-center">
        <Image
          src={LogoIcon}
          alt="logo"
          className="max-w-full w-28 h-28 p-2 "
        />
      </div>
      <NavBarList className="flex-grow">
        <NavBarListItem>
          <HomeIcon className="w-4 h-4" /> Home
        </NavBarListItem>
        <NavBarListItem>
          <GamepadIcon className="w-4 h-4" /> Games
        </NavBarListItem>
        <NavBarListItem>
          <AwardIcon className="w-4 h-4" /> Top 10
        </NavBarListItem>
        <NavBarListItem>
          <RouteIcon className="w-4 h-4" /> Walkthroughts
        </NavBarListItem>
      </NavBarList>
      <NavBarList>
        <NavBarListItem>
          <FaceHappyIcon className="w-4 h-4" /> User
        </NavBarListItem>
      </NavBarList>
    </nav>
  );
};

export default Navbar;
