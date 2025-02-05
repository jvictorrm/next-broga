import { PrismaClient } from "@prisma/client";
import articles from "../../src/data/articles.json";
import games from "../../src/data/games.json";
import { slugify } from "../../src/helpers/slugify";

const prisma = new PrismaClient();
const isDev = process.env.NODE_ENV === "development";

async function main() {
  console.log("DB Seed");
  if (!isDev) throw new Error("Seed data can only be run in development mode");

  const [, , ...args] = process.argv;
  const truncate = !!args.find((arg) => arg === "-truncate");
  const articles = !!args.find((arg) => arg === "articles");
  const games = !!args.find((arg) => arg === "games");

  if (truncate) {
    if (articles) await truncateArticles();
    if (games) await truncateGamesAndGenres();
  }

  if (articles) await seedArticles();
  if (games) await seedGamesAndGenres();
}

async function truncateArticles() {
  await prisma.article.deleteMany();
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
    "Article"
  );
}

async function truncateGamesAndGenres() {
  await prisma.gameGenre.deleteMany();
  await prisma.games.deleteMany();
  await prisma.genres.deleteMany();
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
    "GameGenre"
  );
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
    "Games"
  );
  await prisma.$executeRawUnsafe(
    "DELETE FROM SQLITE_SEQUENCE WHERE name=$1;",
    "Genres"
  );
  return;
}

async function seedArticles() {
  for (const article of articles) {
    await prisma.article.create({
      data: {
        title: article.title,
        slug: slugify(article.title),
        excerpt: article.excerpt,
        content: article.content,
        image: article.image,
        publishedAt: new Date(article.publish_date),
      },
    });
  }
}

async function seedGamesAndGenres() {
  for (const game of games) {
    const genres = game.genre.map((title) => {
      const slug = slugify(title);

      return {
        genre: {
          connectOrCreate: {
            where: { slug },
            create: { title, slug },
          },
        },
      };
    });

    await prisma.games.create({
      data: {
        title: game.title,
        slug: game.slug,
        year: game.year,
        image: game.fileName,
        link: game.link || "#",
        platform: "Nintendo 64",
        genres: {
          create: genres,
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
