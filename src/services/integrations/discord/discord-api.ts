const axios = require('axios');

import { Http } from "../http";
import { DiscordApiRequest, DiscordApiResponse } from "./interfaces";

/**
 * Integration with a discord micro service that relay's messages to a discord channel
 * https://github.com/tiagovalverde/discord-micro-service
 */
export class DiscordApi extends Http {
  apiKey: string;

  constructor() {
    super({ 
      url: process.env.DISCORD_URL || '',
      endpoint: '/api/messages'
    });
    this.apiKey = process.env.DISCORD_API_KEY || '';
  }

  headers() {
    return {
      'Authorization': `Bearer ${this.apiKey}`
    }
  }

  sendRequest(data: DiscordApiRequest) {
    axios.post(`${this.url}${this.endpoint}`, data, { headers: this.headers() })
    .then(({ data: DiscordApiResponse}: any) => {
      console.log(data.message);
    })
    .catch(({ data: DiscordApiResponse}: any) => {
      console.log(data.message);
    })
  }
}