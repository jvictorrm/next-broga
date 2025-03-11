import Pagination from "@/components/Pagination/Pagination";
import { getGameImage, getGameUrl } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";
import Link from "next/link";

const Games = async ({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}) => {
  const params = await searchParams;
  const currentPage = Number(params?.page || "1");
  const limitPage = Number(params?.limit || "12");
  const games = await GamesService.getGamesList(currentPage, limitPage);

  return (
    <div>
      <div className="container mx-auto my-6">
        <h1 className="text-3xl my-6">Games</h1>
        <div className="grid grid-cols-4 gap-y-12 gap-x-4">
          {games.data.map((game: any) => {
            return (
              <Link
                href={getGameUrl(game.slug)}
                key={game.id}
                className="flex-center flex-col relative overflow-hidden transition duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="h-full w-full">
                  <Image
                    className="h-full w-full object-cover"
                    src={getGameImage(game.image)}
                    alt={game.title}
                    width={600}
                    height={400}
                  />
                </div>
                <p className="pt-2 pb-2 px-2 w-full">{game.title}</p>
              </Link>
            );
          })}
        </div>
        <div className="my-8">
          <Pagination
            currentPage={games.metadata.page}
            totalPages={games.metadata.totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default Games;
