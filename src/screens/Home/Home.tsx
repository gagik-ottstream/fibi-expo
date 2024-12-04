import React from 'react';
import { View } from 'react-native';

import Player from '$components/Player';
import Channels from '$components/Channels';
import styles from './styles';

const Home = (): React.JSX.Element => (
  <View style={styles.root}>
    <Player />
    <Channels />
  </View>
);
export default Home;
