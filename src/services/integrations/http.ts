const axios = require('axios');

export interface HttpOptions {
  endpoint: string;
  url: string;
}

export class Http {
  endpoint: string;
  url: string;

  constructor(options: HttpOptions) {
    this.endpoint = options.endpoint;
    this.url = options.url;
  }

  headers() {
    return {}
  }

  sendRequest(data: any) {
    throw new Error("Method not implemented by child class");
  }
}