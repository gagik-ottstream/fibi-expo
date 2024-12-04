type AudioTrack = 'rus' | 'eng';

export interface Channel {
  id:number
  name:string
  has_archive:boolean
  provider_id:number
  has_timeshift:boolean
  audiotracks:AudioTrack[]
}

export interface Channels {
  list:Channel[]
  provider_id:number
  servertime:number
  total_count:number
  processing_ms:number
}

export interface ChannelUrl{
  url:string
  mode:string
  servertime:number
  processing_ms:number
}
