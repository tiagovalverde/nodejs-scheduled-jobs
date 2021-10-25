import { DiscordSender } from "./discord-sender"
import { Sender } from "./sender"

export const sendersFactory = (senderName: string): typeof Sender => {
  return {
    'DiscordSender': DiscordSender
  }[senderName]!
}