import { DiscordApi } from "../../services/integrations/discord/discord-api";
import { SenderParams } from "../jobs/job.interfaces";
import { Sender } from "./sender";

export class DiscordSender extends Sender {
  channel_name: string | undefined;

  constructor(options: SenderParams) {
    super(options);
    this.channel_name = options.channel_name;
  }

  sendMessage(message: string): void {
    new DiscordApi().sendRequest({
      message: message,
      channel_name: this.channel_name || ''
    })
  }
}