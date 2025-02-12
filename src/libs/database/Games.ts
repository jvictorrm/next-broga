import { Games as GamesPrisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const MAX_RECORDS = 50;
const MIN_OFFSET = 0;

const Games = {
  getOne: async ({
    where,
  }: {
    where: Pick<GamesPrisma, "id"> | Pick<GamesPrisma, "slug">;
  }) => {
    return await prisma.games.findUnique({
      where,
    });
  },
  get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 } = {}) => {
    const take = Math.min(limit, MAX_RECORDS);
    const skip = Math.max(offset, MIN_OFFSET);

    return await prisma.games.findMany({
      where,
      orderBy,
      take,
      skip,
    });
  },
  count: async ({ where = {} } = {}) => {
    return await prisma.games.count({
      where,
    });
  },
};

export default Games;
