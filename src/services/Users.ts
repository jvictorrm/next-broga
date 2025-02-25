import { createHash, verifyHash } from "@/helpers/encode";
import Users from "@/libs/database/Users";

const UsersService = {
  signUp: async (data: any) => {
    const passwordHash = await createHash(data.password);
    return Users.create({ ...data, password: passwordHash });
  },
  signIn: async (data: any) => {
    const user = await Users.findByEmail(data.email);
    if (!user) return null;
    const isValidPassword = await verifyHash(data.password, user.password);
    if (!isValidPassword) return null;

    return { ...user, password: null };
  },
};

export default UsersService;
