

import { Request, Response } from 'express';
import { RATINGS } from './data/ratings';





export function getAllRatings(req: Request, res: Response) {


  res.status(200).json({ payload: Object.values(RATINGS) });


}



