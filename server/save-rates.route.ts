import { Request, Response } from 'express';
import { RATES } from './data/exchange-rates-db-data';


export function saveRates(req: Request, res: Response) {
//TO-DO => 

  res.status(200).json(RATES);
}




