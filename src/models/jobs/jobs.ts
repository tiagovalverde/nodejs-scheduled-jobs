import { Send } from "express";
import { RecurrenceRule, RecurrenceSpecDateRange, RecurrenceSpecObjLit } from "node-schedule";

// TODO: separate interfaces from classes
// Interfaces
export interface Action {
  type: string;
  selector: string;
  variable: string;
}

export interface Storage {
  enabled: boolean;
  type: string;
  filename: string;
  channelName?: string;
}

export interface Sender {
  enabled: boolean;
}

export interface JobTask {
  url: string,
  actions: Action[],
  template: string;
  storage: Storage;
  sender: Sender;
}

export interface JobOptions {
  task: JobTask
}

export interface JobParams {
  type: string;
  description: string;
  rule: string;
  options: JobOptions;
}

// Classes
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

  execute() {
    throw new Error("Method not implemented.");
  }
}