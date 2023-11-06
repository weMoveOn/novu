import { ChannelTypeEnum, ICredentials } from '@novu/shared';
import { WhatsappChatProvider } from '@novu/whatsapp';
import { BaseChatHandler } from './base.handler';

export class WhatsappHandler extends BaseChatHandler {
  constructor() {
    super('whatsapp', ChannelTypeEnum.CHAT);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new WhatsappChatProvider(credentials);
  }
}
