// import { NextFunction, Request, Response } from "express";
// import err from "../utils/err";
// import { verifyToken } from "../utils/token";

// export default async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers.authorization;
//     if (!token) throw err('unauthorized', errMessages.tokenNotFound);
//     const payload = verifyToken(token);
//     req.userToken = payload;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: error.message });
//   }
// };
