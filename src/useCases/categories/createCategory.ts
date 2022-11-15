import { Request, Response } from 'express';

export async function createCategory(req: Request, res: Response) {
  res.send('OK POST CREATE CATEGORY');
}
