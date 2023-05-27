import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import IconSvgDefaultAvatar from './IconSvgDefaultAvatar';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgDefaultAvatarDark from './IconSvgDefaultAvatarDark';

export const AvatarIcon = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <View style={styles.avatarIconStyle}>
      {darkMode ? (
        <IconSvgDefaultAvatarDark />
      ) : (
        <IconSvgDefaultAvatar />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarIconStyle: {
    alignItems: 'center',
    paddingTop: 40,
  },
});
