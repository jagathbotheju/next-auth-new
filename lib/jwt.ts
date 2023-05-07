import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOptions {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOptions = {
  expiresIn: 20,
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOptions = DEFAULT_SIGN_OPTION
) {
  console.log("signing access token******************");
  const jwt_token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });
  return jwt_token;
}

export function verifyJwt(token: string) {
  console.log("verify token ******************");
  try {
    const decoded_jwt = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded_jwt as JwtPayload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
