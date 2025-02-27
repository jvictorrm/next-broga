import { createHash, verifyHash } from "@/helpers/encode";
import Users from "@/libs/database/Users";
import { User as UserPrisma } from "@prisma/client";

const UsersService = {
  signUp: async (data: Pick<UserPrisma, "name" | "email" | "password">) => {
    const passwordHash = await createHash(data.password);
    if (!passwordHash) throw new Error("Password hash could not be created");
    return Users.create({ ...data, password: passwordHash });
  },
  signIn: async (data: Pick<UserPrisma, "email" | "password">) => {
    const user = await Users.findByEmail(data.email);
    if (!user) return null;
    const isValidPassword = await verifyHash(data.password, user.password);
    if (!isValidPassword) return null;

    return { ...user, password: null };
  },
};

export default UsersService;
