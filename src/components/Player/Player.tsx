import { TVFocusGuideView, } from 'react-native';
import React, { } from 'react';
import Text from '$uikit/Text';
import {
  useVideoPlayer, VideoView
} from 'expo-video';
import { useEvent } from 'expo';
import { observer } from 'mobx-react-lite';
import channelsStore from '$store/channels';
import Video, { VideoRef } from 'react-native-video';
import styles from './styles';
// import video from '../../../assets/videos/m.mp4';
// import Controls from './Controls';
// const v:VideoSource = video;

const Player = observer(() => {
  const player = useVideoPlayer({
    uri: channelsStore.url?.url
  }, (p) => {
    const pla = p;
    pla.play();
  // pla.loop = true;
  // pla.muted = true;
  });

  const a = useEvent(player, 'playingChange', {
    isPlaying: player.playing
  });
  console.log(1);
  return (
    <TVFocusGuideView
      style={styles.root}
      focusable
    >

      {/* <Text>asdasd</Text> */}
      <VideoView
        style={styles.video}
        player={player}
        nativeControls
        contentFit="cover"
        allowsFullscreen
        allowsPictureInPicture
      />
      {/* <Controls/>   */}
    </TVFocusGuideView>
  );
});

export default Player;
