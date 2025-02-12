import { getGameImage } from "@/helpers/games";
import GamesService from "@/services/Games";
import Image from "next/image";

const GameDetailPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const game = await GamesService.getGameBySlug(slug);

  if (!game) return <></>;

  return (
    <div className="container mx-auto my-6">
      <div className="w-2/3">
        <h3 className="text-2xl my-6">{game.title}</h3>
        <Image
          className="my-6 h-full w-full object-cover transition duration-500 hover:scale-105 rounded-lg"
          src={getGameImage(game.image)}
          alt={game.title}
          width={600}
          height={400}
        />
        <div className="my-6 flex flex-col">
          <p className="my-2 p-2 bg-slate-700 rounded">
            {game.platform} - {game.year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
