import { jwtVerify, SignJWT } from "jose";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
const algorithm = "HS256";

export const encrypt = async (payload: any) => {
  const result = await new SignJWT(payload)
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setExpirationTime("1 hour from now")
    .sign(secretKey);

  return result;
};

export const decrypt = async (value: string) => {
  const { payload } = await jwtVerify(value, secretKey, {
    algorithms: [algorithm],
  });
  return payload;
};
