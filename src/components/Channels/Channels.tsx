import React, {
  LegacyRef,
  MutableRefObject,
  RefObject,
  useEffect,
  useLayoutEffect, useRef
} from 'react';
import {
  VirtualizedList, TVFocusGuideView, View
} from 'react-native';
import type { PressableProps } from 'react-native';
import { observer } from 'mobx-react-lite';
import type { Channel } from '$models/index';
import Text from '$uikit/Text';
import Button from '$uikit/Button';
import channelsStore from '$store/channels';
// import { useNavigationFocus } from '$providers/NavigationFocus';
// import { useFocusEffect } from 'expo-router';
import { useNavigationFocus } from '$providers/NavigationFocus';
import styles from './styles';

const Channels = observer(() => {
  const [value, setValue] = useNavigationFocus();

  useLayoutEffect(() => {
    channelsStore.getAllChannels();
  }, []);

  useEffect(() => {
    if(channelsStore.data){
      setValue(channelsStore.data.list[0].id.toString());
    }
  }, [channelsStore.data]);

  return (
    <TVFocusGuideView
      style={styles.root}
      focusable
      autoFocus
    >
      <Text style={styles.header}>Channels</Text>
      <VirtualizedList
        initialNumToRender={10}
        data={channelsStore.data?.list ?? []}
        getItemCount={(data:Channel[]) => data.length}
        getItem={(data:Channel[], index:number) => data[index]}
        keyExtractor={(channel:Channel) => channel.id.toString()}
        renderItem={({ item }) => (
          <Button
            key={item.id}
            text={item.name}
            containerStyles={{
              marginBottom: 4, borderRadius: 8
            }}
            focusId={item.id.toString()}
            onPress={() => {
              channelsStore.getChannel(item.id.toString());
            }}
          />
        )}
      />
    </TVFocusGuideView>
  );
});

export default Channels;
