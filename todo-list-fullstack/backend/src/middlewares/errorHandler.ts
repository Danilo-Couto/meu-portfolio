import { Request, Response } from "express";
import { httpStatus } from "../utils/httpStatus";

export const error = (err: any, _req: Request, res: Response) => {
  const { code, message } = err;
  if (code) return res.status(httpStatus[code]).json({ message });
  console.error(err);
  
  return res.status(httpStatus.serverErr).json({ message });
};
