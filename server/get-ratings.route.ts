

import { Request, Response } from 'express';
import { RATINGS } from "./db-data";



export function getAllRatings(req: Request, res: Response) {

  /**
   * to simulate a loading Error
   * 
   * console.log("ERROR loading products!");
   * res.status(500).json({message: 'error occurred.'});
   * return;
   * 
   */



  res.status(200).json({ payload: Object.values(RATINGS) });


}



