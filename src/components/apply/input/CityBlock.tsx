import React, { useContext } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface ICityBlock {
  cityTitle: string;
  cityPlaceholder: string;
}

export const CityBlock = ({
  cityTitle,
  cityPlaceholder,
}: ICityBlock) => {
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
      <Text style={[styles.cityTextStyle, textStyle]}>
        {cityTitle}
      </Text>
      <TextInput
        placeholder={cityPlaceholder}
        placeholderTextColor={
          darkMode ? colors.WHITETEXT : colors.GRAYTEXT
        }
        autoCapitalize={'none'}
        autoCorrect={false}
        maxLength={16}
        style={[
          styles.cityInputTextStyle,
          textStyle,
          shadowStyle,
          shadowStyleBorder,
        ]}
        clearButtonMode="always"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  cityTextStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.BLACKTEXT,
  },
  cityInputTextStyle: {
    fontSize: 14,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Regular',
    borderWidth: 16,
    borderRadius: 16,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    marginTop: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
});
