/**
 * Tasks
 * - test node-schedule 
 */

import express, { Application, Request, Response } from 'express';
import { scheduleJob } from 'node-schedule';

const app: Application = express();

// TODO: config file
const port: number = 3001;

app.get('/schedule', (req: Request, res: Response) => {
  res.send('Endpoint to document how to use the POST endpoint');
});

// POC: ADA price every 1h (5sec test)
// https://coinmarketcap.com/currencies/cardano/
// xpath: class LIKE priceTitle
// Test scheduler

// Example of schedule

// TODO
// - load job from jobs.json into own class
// - abstract JOBS class
// - inherit abstract class into WebScraperJob class 
     // (bc job callback fn is different for every scrape job)
     // can be reused for any coinmarket cap tickers
     // but once I change the work to get other data callback has to be diff

// TODO
// Module exposing DAO: Job, WebScraperJob
// Load Jobs from json
// setup web scraper llibraries
// scrape from 


let x = 'DONE!'
const job = scheduleJob('*/1 * * * * *', function(x: any){
  console.log(x);
}.bind(null, x));

x = 'ChANGED';