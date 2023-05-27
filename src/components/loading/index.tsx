import React, { FC, useContext } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../../colors/colors';
import { ThemeContext } from '../../ThemeContext';

export interface ILoadingProps extends ActivityIndicatorProps {
  style?: StyleProp<ViewStyle>;
}

const Loading: FC<ILoadingProps> = ({
  size = 'large',
  color = colors.BUTTON,
  style,
}) => {
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };

  return (
    <View style={[styles.container, style, backStyle]}>
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
    backgroundColor: colors.BACK,
  },
});
