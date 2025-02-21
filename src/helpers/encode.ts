import bcrypt from "bcrypt";

const saltRounds = 12;

const createHash = async (value: string) => {
  try {
    const hash = await bcrypt.hash(value, saltRounds);
    return hash;
  } catch (_) {
    return null;
  }
};

const verifyHash = async (value: string, hash: string) => {
  try {
    return await bcrypt.compare(value, hash);
  } catch (_) {
    return false;
  }
};

export { createHash, verifyHash };
