import { RecurrenceRule, RecurrenceSpecDateRange, RecurrenceSpecObjLit } from "node-schedule";
import { JobOptions, JobParams } from "./job.interfaces";
export class Job {
  state: any = {};
  type: string;
  description: string;
  rule: string | number | RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date;
  options: JobOptions;
  
  constructor(data: JobParams) {
    this.type = data.type;
    this.description = data.description;
    this.rule = data.rule;
    this.options = data.options;
  }

  setState(key:string, value: string) {
    this.state = {
      ...this.state,
      [key]: value
    }
  }

  async execute() {
    await this.beforeExecution();
    await this.execution();
    await this.afterExecution();
  }

  async beforeExecution() {
    throw new Error("Method not implemented.");
  }

  async execution() {
    throw new Error("Method not implemented.");
  }

  async afterExecution() {
    throw new Error("Method not implemented.");
  }
}