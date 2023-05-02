import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../colors/colors';
import IconSvgX from '../../../assets/icons/general/IconSvgX';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IApplicationsProps {
  teamTitle: string;
  specs: string;
  city: string;
}

export const Response = ({teamTitle, specs, city}: IApplicationsProps) => {
  return (
    <View style={styles.flatListStyle}>
      <View style={styles.teamViewStyle}>
        <Text style={styles.teamTextStyle}>{teamTitle}</Text>
        <TouchableOpacity style={styles.btnStyle}>
          <IconSvgX />
        </TouchableOpacity>
      </View>
      <View style={styles.specViewStyle}>
        <Text style={styles.specTextStyle}>{specs}</Text>
      </View>
      <View style={styles.cityViewStyle}>
        <Text style={styles.cityTextStyle}>{city}</Text>
      </View>
      <View style={styles.checkStatusViewStyle}>
        <Text style={styles.checkStatusFontStyle}>Delivered</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatListStyle: {
    backgroundColor: colors.SHADOW,
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 16,
    height: 155,
    width: 335,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  teamViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 35,
    paddingTop: 25,
  },
  teamTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  specViewStyle: {
    paddingLeft: 35,
  },
  specTextStyle: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: colors.BLACKTEXT,
  },
  cityViewStyle: {
    paddingLeft: 35,
  },
  cityTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  checkStatusViewStyle: {
    marginLeft: 35,
    marginTop: 10,
    backgroundColor: colors.OPACITYBUTTON,
    width: 135,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  checkStatusFontStyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: colors.BUTTON,
  },
  btnStyle: {
    paddingRight: 25,
  },
});
