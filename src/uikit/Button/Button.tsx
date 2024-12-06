import type { ReactElement } from 'react';

import React, { forwardRef } from 'react';
import {
  Pressable, View
} from 'react-native';
import type {
  NativeSyntheticEvent, TargetedEvent
} from 'react-native';

import Text from '$uikit/Text';
import { useNavigationFocus } from '$providers/NavigationFocus';

import type { ButtonProps } from './types';

import styles from './styles';

const Button =forwardRef<View, ButtonProps>(({
  text,
  onPress,
  onFocus,
  focusId,
  containerStyles,
  textStyles
}:ButtonProps, ref):ReactElement => {
  const [value, setValue] = useNavigationFocus();

  const onChangeFocus = (e:NativeSyntheticEvent<TargetedEvent>):void => {
    setValue(focusId);
    onFocus?.(e);
  };

  return (
    <Pressable
      ref={ref}
      testID={focusId}
      style={[styles.root, containerStyles, {
        backgroundColor: value === focusId ? 'rgba(135,135,135,.7)':'rgba(50, 36, 44, 0.7)'
      }]}
      onPress={(e) => {
        setValue(focusId);
        onPress?.(e);
      }}
      onBlur={() => {
        setValue(undefined);
      }}
      onFocus={onChangeFocus}
    >
      {text && (
        <Text style={[textStyles, {
          color: value === focusId ? 'black' : 'rgba(200,200,200,1)'
        }]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  );
});

export default Button;
