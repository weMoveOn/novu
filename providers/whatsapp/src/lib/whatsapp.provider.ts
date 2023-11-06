import {
  ChannelTypeEnum,
  ISendMessageSuccessResponse,
  IChatOptions,
  IChatProvider,
} from '@novu/stateless';
import axios from 'axios';

export class WhatsappChatProvider implements IChatProvider {
  id = 'whatsapp';
  channelType = ChannelTypeEnum.CHAT as ChannelTypeEnum.CHAT;
  private axiosInstance = axios.create();

  constructor(private config: { apiKey?: string }) {}

  async sendMessage(
    options: IChatOptions
  ): Promise<ISendMessageSuccessResponse> {
    const body = {
      alert_uid: this.config.apiKey,
      message: options.content,
    };

    // eslint-disable-next-line no-console
    console.log('Hello world', body);
    /*
     * response is just string "Ok."
     *  const { headers } = await this.axiosInstance.post(
     *    'https://localhost:8080/api/test',
     *    body
     *  );
     */

    return {
      id: '12345',
      date: new Date().toISOString(),
    };
  }
}
