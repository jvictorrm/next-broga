import Hero from "@/components/Hero/Hero";
import Pagination from "@/components/Pagination/Pagination";
import ArticleService from "@/services/Articles";
import GamesService from "@/services/Games";
import Image from "next/image";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}) {
  const params = await searchParams;
  const currentPage = Number(params?.page || "1");
  const limitPage = Number(params?.limit || "10");
  const articles = await ArticleService.getHomeArticles(currentPage, limitPage);
  const latestArticles = await ArticleService.getHomeLatestArticles();
  const heroGames = await GamesService.getRandomGames(40);

  return (
    <>
      <div className="container mx-auto my-6 w-full h-[35vh] flex-center">
        <Hero games={heroGames.data} />
      </div>

      <div className="container mx-auto my-10">
        <h2 className="text-3xl my-6 underline">Latest Articles</h2>

        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {latestArticles.data.map((article) => (
            <Link
              key={article.title}
              href={`/articles/${article.slug}`}
              className="flex-center relative overflow-hidden transition duration-500 hover:scale-105 cursor-pointer"
            >
              <div className="h-full w-full">
                <Image
                  className="h-full w-full object-cover"
                  src={`/assets/images/articles/${article.image}`}
                  alt={article.title}
                  width={600}
                  height={400}
                />
              </div>
              <p className="absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full">
                {article.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-10">
        <h3 className="text-2xl my-6 underline">Articles</h3>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <div className="flex gap-4 flex-col">
              {articles.data.map((article) => (
                <div
                  key={article.title}
                  className="flex gap-4 bg-slate-800 rounded-md overflow-hidden transition duration-500 hover:scale-105 cursor-pointer "
                >
                  <div>
                    <Image
                      className="h-full w-full object-cover"
                      src={`/assets/images/articles/${article.image}`}
                      alt={article.title}
                      width={350}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 py-4">
                    <h2 className="text-3xl text-indigo-400">
                      {article.title}
                    </h2>
                    <p className="flex-grow">
                      <small>
                        {article.publishedAt.toLocaleString("pt-BR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </small>
                    </p>
                    <p className="flex-grow">{article.excerpt}</p>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max"
                    >
                      Ler mais
                    </Link>
                  </div>
                </div>
              ))}
              <div className="my-8">
                <Pagination
                  currentPage={articles.metadata.page}
                  totalPages={articles.metadata.totalPages}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-green-800"> bb </div>
        </div>
      </div>
    </>
  );
}
