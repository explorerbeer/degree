import React, {FC} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../../colors/colors';

export interface ILoadingProps extends ActivityIndicatorProps {
  style?: StyleProp<ViewStyle>;
}

const Loading: FC<ILoadingProps> = ({
  size = 'large',
  color = colors.BUTTON,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.GRAYTEXT,
  },
});
