import Image from "next/image";
import LogoIcon from "../assets/game-console-gamer-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="flex h-screen flex-col gap-4 bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 text-white">
      <div className="flex items-center justify-center">
        <Image src={LogoIcon} alt="logo" className="max-w-full w-28 h-28 p-2" />
      </div>
      <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer">
          Home
        </li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer">
          Games
        </li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer">
          Top 10
        </li>
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer">
          Walkthroughts
        </li>
      </ul>
      <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
        <li className="my-2 rounded-lg bg-transparent hover:bg-slate-800 p-2 cursor-pointer">
          User
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
