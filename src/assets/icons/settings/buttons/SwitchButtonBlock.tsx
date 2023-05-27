import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { colors } from '../../../../colors/colors';
import { ThemeContext } from '../../../../ThemeContext';

interface ISwitchButtonBlock {
  title: string;
}

export const SwitchButtonBlock = ({ title }: ISwitchButtonBlock) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const textColor = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const textStyle = { color: textColor };

  const handleToggleSwitch = () => {
    toggleDarkMode();
  };

  return (
    <View style={styles.switchBlockStyle}>
      <Text style={[styles.mainTextStyle, textStyle]}>{title}</Text>
      <Switch
        value={darkMode}
        onValueChange={handleToggleSwitch}
        trackColor={{ true: '#FF7F50' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchBlockStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 30,
    paddingRight: 20,
  },
  mainTextStyle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});
