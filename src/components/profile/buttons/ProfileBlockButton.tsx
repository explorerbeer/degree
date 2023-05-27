import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconSvgGoBack from '../../../assets/icons/general/IconSvgGoBack';
import { colors } from '../../../colors/colors';

interface IProfileBlockButton {
  prTitle: string;
  onPress: () => void;
}

export const ProfileBlockButton = ({
  prTitle,
  onPress,
}: IProfileBlockButton) => {
  return (
    <View style={styles.profileWithButtonStyle}>
      <TouchableOpacity
        style={styles.goBackButtonStyle}
        onPress={onPress}
      >
        <IconSvgGoBack />
      </TouchableOpacity>
      <Text style={styles.profileTextStyle}>{prTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileTextStyle: {
    fontSize: 20,
    color: colors.BLACKTEXT,
    paddingRight: 157.5,
    fontFamily: 'Poppins-Medium',
  },
  profileWithButtonStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
  },
  goBackButtonStyle: {
    paddingLeft: 30,
  },
});
