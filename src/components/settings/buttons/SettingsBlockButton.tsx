import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconSvgGoBack from '../../../assets/icons/general/IconSvgGoBack';
import {colors} from '../../../colors/colors';

interface ISettingsBlockbutton {
  settingsTitle: string;
  onPress: () => void;
}

export const SettingsBlockButton = ({
  settingsTitle,
  onPress,
}: ISettingsBlockbutton) => {
  return (
    <View style={styles.settingsWithButtonStyle}>
      <TouchableOpacity style={styles.goBackButtonStyle} onPress={onPress}>
        <IconSvgGoBack />
      </TouchableOpacity>
      <Text style={styles.settingsTextStyle}>{settingsTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsWithButtonStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
  },
  goBackButtonStyle: {
    paddingLeft: 30,
  },
  settingsTextStyle: {
    fontSize: 20,
    paddingRight: 150,
    fontFamily: 'Poppins-Medium',
    color: colors.BLACKTEXT,
  },
});
