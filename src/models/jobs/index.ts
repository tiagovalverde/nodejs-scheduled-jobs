const fs = require('fs');
const path = require("path");

import { Job, JobParams } from "./jobs";
import { WebScraperJob } from "./web-scraper-job";

/**
 * Loads set of job instances from a json file configuration
 * @returns 
 */
const loadJobs = (): Job[] => {
  const json = fs.readFileSync(path.resolve(__dirname, '../../config/jobs/jobs.json'));
  return JSON.parse(json).map((job: JobParams) => {
    return new (jobsFactory(job.type))(job);
  });
}

/**
 * Job classes factory to ddetermine which job type to load
 * accordingly to the configuration provided
 * @param jobName 
 * @returns 
 */
 export const jobsFactory = (jobName: string): typeof Job => {
  return {
    'WebScraper': WebScraperJob
  }[jobName]!
}

export {
  loadJobs,
  Job
};