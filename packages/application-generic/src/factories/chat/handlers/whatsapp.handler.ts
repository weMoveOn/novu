import { ChannelTypeEnum, ICredentials } from '@novu/shared';
import { WhatsappChatProvider } from '@novu/whatsapp';
import { BaseChatHandler } from './base.handler';

export class WhatsappHandler extends BaseChatHandler {
  constructor() {
    super('whatsapp', ChannelTypeEnum.CHAT);
  }

  buildProvider(credentials: ICredentials) {
    const config: {
      accountSid: string;
      token: string;
      from: string;
    } = {
      accountSid: credentials.accountSid as string,
      token: credentials.token as string,
      from: credentials.from as string,
    };
    this.provider = new WhatsappChatProvider(config);
  }
}
