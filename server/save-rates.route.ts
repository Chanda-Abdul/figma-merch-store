import { Request, Response } from 'express';
import { RATES } from './data/exchange-rates-db-data';


export function saveRates(req: Request, res: Response) {

  /**
   * to simulate a saving Error
   * 
   * console.log("ERROR saving course!");
   * res.sendStatus(500);
   * return;
   * 
   */
  // res.status(200).json({ payload: Object.values(RATES) });
  
  
    // const rates: any = rateS;
  
    // const rate = rates.find((rate: any) => rate.id == rateId);
  
    res.status(200).json(RATES);
  }
  // const id = req.params["id"],
  //   changes = req.body;

  // console.log("Saving course changes", id, JSON.stringify(changes));

  // const newCourse = {
  //   ...COURSES[id],
  //   ...changes
  // };

  // COURSES[id] = newCourse;

  // console.log("new course version", newCourse);

  // setTimeout(() => {

  //   res.status(200).json(COURSES[id]);

  // }, 2000);




