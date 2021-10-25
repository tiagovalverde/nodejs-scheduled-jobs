import { SenderParams } from "../jobs/job.interfaces";

export class Sender {
  constructor(options: SenderParams) {}
  
  sendMessage(message: string): void {
    throw new Error("Method not implemented.");
  }
}