import {
  Channels, ChannelUrl
} from '$models/index';

import Api from './index';

class ChannelApi extends Api {
  constructor() {
    super('/channels');
  }

  getAll() {
    return this.get<Channels>({
      url: '?provider_id=6'
    });
  }

  getChannel(channelId:string){
    return this.get<ChannelUrl>({
      url: `/${channelId}/url?provider_id=6&client_id=1414141414&device_id=1&expire_at=1785000167&server_id=6`
    });
  }
}

const channelApi = new ChannelApi();

export default channelApi;
