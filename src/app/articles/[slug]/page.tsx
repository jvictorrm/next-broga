import { getArticleImage } from "@/helpers/articles";
import ArticleService from "@/services/Articles";
import Image from "next/image";

type ArticleDetailPageProps = {
  params: { slug: string };
};

const ArticleDetailPage = async ({ params }: ArticleDetailPageProps) => {
  const slug = params.slug;
  const article = await ArticleService.getArticleBySlug(slug);

  if (!article) return <></>;

  return (
    <div className="container mx-auto my-6">
      <div className="w-2/3">
        <h3 className="text-2xl my-6">{article.title}</h3>
        <Image
          className="my-6 h-full w-full object-cover transition duration-500 hover:scale-105 rounded-lg"
          src={getArticleImage(article.image)}
          alt={article.title}
          width={600}
          height={400}
        />
        <div className="my-6 flex flex-col">
          <p className="my-2 p-2 bg-slate-700 rounded">{article.excerpt}</p>
          <p className="my-2">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
