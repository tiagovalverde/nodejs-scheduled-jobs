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

export interface SenderParams {
  channel_name?: string;
}

export interface Sender {
  enabled: boolean;
  type: string;
  params: SenderParams;
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