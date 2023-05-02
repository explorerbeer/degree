import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconSvgGoBack from '../../../assets/icons/general/IconSvgGoBack';
import {colors} from '../../../colors/colors';

interface IRespondBlockButton {
  resTitle: string;
  onPress: () => void;
}

export const RespondBlockButton = ({
  resTitle,
  onPress,
}: IRespondBlockButton) => {
  return (
    <View style={styles.blockStyle}>
      <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
        <IconSvgGoBack />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{resTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 70,
  },
  btnStyle: {
    paddingLeft: 30,
  },
  textStyle: {
    marginRight: 144,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.BLACKTEXT,
  },
});
