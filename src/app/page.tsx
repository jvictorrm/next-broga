import ArticleService from "@/services/Articles";
import Image from "next/image";

export default async function Home() {
  const articles = await ArticleService.getHomeArticles();
  const latestArticles = await ArticleService.getHomeLatestArticles();

  return (
    <>
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>algo tals</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {latestArticles.data.map((article) => (
            <div
              key={article.title}
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
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-6">
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
                    <button className="bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max">
                      Ler mais
                    </button>
                  </div>
                </div>
              ))}
              <div>Pagination</div>
            </div>
          </div>
          <div className="col-span-4 bg-green-800"> bb </div>
        </div>
      </div>
    </>
  );
}
