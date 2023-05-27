import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface INameDataBlock {
  firstNameText: string;
  lastNameText: string;
  fNamePlaceholder: string;
  lNamePlaceholder: string;
}

export const NameDataBlock = ({
  firstNameText,
  lastNameText,
  fNamePlaceholder,
  lNamePlaceholder,
}: INameDataBlock) => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowStyle = {
    backgroundColor: shadowColor,
  };
  const shadowStyleBorder = {
    borderColor: shadowColor,
  };
  const textStyle = {
    color: textColor,
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.lastFirstNameStyle, textStyle]}>
          {firstNameText}
        </Text>
        <TextInput
          placeholder={fNamePlaceholder}
          placeholderTextColor={
            darkMode ? colors.WHITETEXT : colors.GRAYTEXT
          }
          autoCapitalize={'none'}
          autoCorrect={false}
          maxLength={16}
          style={[
            styles.lastFirstTextInputStyle,
            shadowStyle,
            shadowStyleBorder,
          ]}
          clearButtonMode="always"
          s
        />
      </View>
      <View>
        <Text style={[styles.lastFirstNameStyle, textStyle]}>
          {lastNameText}
        </Text>
        <TextInput
          placeholder={lNamePlaceholder}
          placeholderTextColor={
            darkMode ? colors.WHITETEXT : colors.GRAYTEXT
          }
          autoCapitalize={'none'}
          autoCorrect={false}
          maxLength={16}
          style={[
            styles.lastFirstTextInputStyle,
            shadowStyle,
            shadowStyleBorder,
          ]}
          clearButtonMode="always"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  lastFirstNameStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.BLACKTEXT,
  },
  lastFirstTextInputStyle: {
    fontSize: 14,
    height: 52,
    width: 146,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    borderWidth: 16,
    borderRadius: 16,
    textAlign: 'center',
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
});
