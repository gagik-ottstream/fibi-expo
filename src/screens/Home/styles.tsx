import { StyleSheet } from 'react-native';

import { Styles } from './types';

const styles = StyleSheet.create<Styles>({
  root: {
    backgroundColor: 'rgba(50, 36, 44, 0.1)',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1
  }
});

export default styles;
