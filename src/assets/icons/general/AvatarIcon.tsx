import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconSvgDefaultAvatar from './IconSvgDefaultAvatar';

export const AvatarIcon = () => {
  return (
    <View style={styles.avatarIconStyle}>
      <IconSvgDefaultAvatar />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarIconStyle: {
    alignItems: 'center',
    paddingTop: 40,
  },
});
