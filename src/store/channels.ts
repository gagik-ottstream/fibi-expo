import {
  action, runInAction, makeObservable,
  observable
} from 'mobx';

import {
  Channels, ChannelUrl
} from '$models/index';
import channelApi from '$services/api/channel';

class ChannelsStore {
  public data: null | Channels = null;
  public isLoading = false;
  public url:ChannelUrl | null = null;

  constructor() {
    makeObservable(this, {
      getAllChannels: action,
      setLoading: action,
      isLoading: observable,
      data: observable,
      url: observable,
    });
  }

  public getAllChannels() {
    runInAction(() => {
      this.isLoading = true;
    });
    channelApi
      .getAll()
      .then((res) => {
        this.getChannel(res.list[0].id.toString());
        runInAction(() => {
          this.data = res;
        });
      })
      .catch(() => {
        console.log('ERROR', e);
      })
      .then(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  }

  public setLoading(loading: boolean) {
    this.isLoading = loading;
  }

  public getChannel(id:string){
    channelApi.getChannel(id)
      .then((res) => {
        runInAction(() => {
          this.url = res;
        });
      })
      .catch(() => {
        console.log('ERROR', e);
      })
      .then(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  }
}

const channelsStore = new ChannelsStore();

export default channelsStore;
