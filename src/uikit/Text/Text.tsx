import React from 'react';
import * as RN from 'react-native';

import styles from './styles';
import { TextProps } from './types';

const Text = ({
  children,
  onPress,
  style
}:TextProps):React.ReactElement => (
  <RN.Text
    onPress={onPress}
    style={[styles.root, style]}
  >
    {children}
  </RN.Text>
);

export default Text;
