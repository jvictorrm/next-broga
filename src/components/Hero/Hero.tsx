import { getGameImage } from "@/helpers/games";
import Image from "next/image";
import Link from "next/link";

type ScrollableGameListType = {
  games: any[];
  width?: number;
  height?: number;
};

export const ScrollableGameList = ({
  games,
  width = 175,
  height = 128,
}: ScrollableGameListType) => {
  return (
    <>
      {games.map((game) => (
        <Link
          href={`/games/${game.slug}`}
          key={game.id}
          className="h-32 w-auto"
        >
          <Image
            className="h-full w-full object-cover brightness-75 hover:brightness-100"
            src={getGameImage(game.image)}
            alt={game.title}
            width={width}
            height={height}
          />
        </Link>
      ))}
    </>
  );
};

const Hero = ({ games }: { games: any[] }) => {
  const style = {
    "--duration": "180s",
    "--item-size": "128px",
    "--item-count": "10",
  } as React.CSSProperties;

  return (
    <div className="container mx-auto my-6 h-[42vh] flex-center gap-2">
      <div className="flex-center">
        <div className="flex-center flex-col">
          <Image
            className="object-cover brightness-75 hover:brightness-100 w-[160px] h-auto"
            src="/assets/images/nintendo-64-logo.svg"
            alt="Nintendo 64 logo"
            width={160}
            height={50}
          />
          <h1 className="text-4xl my-6">The Best Nintendo 64 fan website</h1>
        </div>
      </div>

      <div
        className="ml-auto w-auto h-[36vh] border border-slate-700 p-2 rounded-lg"
        style={style}
      >
        <div className="flex h-full overflow-hidden gap-2">
          <div className="scroll-ttb flex flex-col gap-2">
            <ScrollableGameList games={games.slice(0, 10)} />
            <ScrollableGameList games={games.slice(0, 10)} />
          </div>
          <div className="scroll-btt flex flex-col gap-2">
            <ScrollableGameList games={games.slice(10, 20)} />
            <ScrollableGameList games={games.slice(10, 20)} />
          </div>
          <div className="scroll-ttb flex flex-col gap-2">
            <ScrollableGameList games={games.slice(20, 30)} />
            <ScrollableGameList games={games.slice(20, 30)} />
          </div>
          <div className="scroll-btt flex flex-col gap-2">
            <ScrollableGameList games={games.slice(30, 40)} />
            <ScrollableGameList games={games.slice(30, 40)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
