import type {
  ViewStyle, PressableProps, TextStyle
} from 'react-native';

export interface Styles {
  root:ViewStyle
}

export interface ButtonProps extends PressableProps {
  focusId:string
  text?:string
  containerStyles?:ViewStyle,
  textStyles?:TextStyle
}
