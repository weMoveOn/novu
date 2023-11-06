import {
  ChannelTypeEnum,
  ISendMessageSuccessResponse,
  IChatOptions,
  IChatProvider,
} from '@novu/stateless';

export class WhatsappChatProvider implements IChatProvider {
  id = 'whatsapp';
  channelType = ChannelTypeEnum.CHAT as ChannelTypeEnum.CHAT;

  constructor(private config: { apiKey?: string }) {}

  async sendMessage(
    options: IChatOptions
  ): Promise<ISendMessageSuccessResponse> {
    console.log('Hello world');

    return {
      id: 'id_returned_by_provider',
      date: 'current_time',
    };
  }
}
