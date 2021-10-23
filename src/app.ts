import express, { Application, Request, Response } from 'express';
import { scheduleJob, Job as NodeScheduleJob } from 'node-schedule';

// Models
import { loadJobs, Job } from './models/jobs';

const app: Application = express();

/** TODO: API endpoint that receive jobs config data to be executed */
app.get('/schedule', (req: Request, res: Response) => {
  res.send('works');
});


const jobs: Job[]  = loadJobs();

const scheduledJobs: NodeScheduleJob[] = [];

jobs.forEach((j: Job) => {
  const scheduledJob = scheduleJob(j.rule, function(job: Job) {
    job.execute();
  }.bind(null, j))

  scheduledJobs.push(scheduledJob);
});
