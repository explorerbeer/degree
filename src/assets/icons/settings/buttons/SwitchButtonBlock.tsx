import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {colors} from '../../../../colors/colors';

interface ISwitchButtonBlock {
  title: string;
}

export const SwitchButtonBlock = ({title}: ISwitchButtonBlock) => {
  const [mode, setMode] = useState(false);
  return (
    <View style={styles.switchBlockStyle}>
      <Text style={styles.mainTextStyle}>{title}</Text>
      <Switch
        value={mode}
        onValueChange={() => setMode(value => !value)}
        trackColor={{true: '#FF7F50'}}
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
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
  },
});
