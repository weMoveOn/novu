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

  constructor(
    private config: { accountSid?: string; token?: string; from?: string }
  ) {}

  async sendMessage(
    options: IChatOptions
  ): Promise<ISendMessageSuccessResponse> {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${this.config.accountSid}/Messages.json`;
    const from = `whatsapp:${this.config.from}`;
    const to = `whatsapp:${options.webhookUrl}`;
    const body = options.content;

    const data = new URLSearchParams();
    data.append('From', from);
    data.append('To', to);
    data.append('Body', body);

    const authHeader = {
      username: this.config.accountSid,
      password: this.config.token,
    };
    const response = await this.axiosInstance.post(url, data, {
      auth: authHeader,
    });

    return {
      id: response.data.sid,
      date: (response.data.date_created
        ? new Date(response.data.date_created)
        : new Date()
      ).toISOString(),
    };
  }
}
