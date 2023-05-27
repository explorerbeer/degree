import React, { useContext } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import IconSvgFilterButton from '../../../assets/icons/general/IconSvgFilterButton';
import { colors } from '../../../colors/colors';
import { ThemeContext } from '../../../ThemeContext';

interface IFilterBlockButton {
  searchTitle: string;
  filterOnPress: () => void;
  searchOnPress: () => void;
}

export const FilterBlockButton = ({
  searchTitle,
  filterOnPress,
  searchOnPress,
}: IFilterBlockButton) => {
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };
  const textColor1 = darkMode
    ? colors.OPACITYBUTTON
    : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowColor2 = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const statusColor = darkMode
    ? colors.DARKBACK
    : colors.OPACITYBUTTON;
  const textStyle2 = {
    color: textColor2,
    backgroundColor: shadowColor,
    borderColor: shadowColor2,
  };
  const textStyle3 = {
    color: textColor2,
  };
  const shadowStyle = {
    backgroundColor: shadowColor,
  };

  return (
    <View style={styles.filterButtonStyle}>
      <TouchableOpacity
        style={[styles.searchButtonStyle, textStyle2]}
        onPress={searchOnPress}
      >
        <Text style={[styles.searchTextStyle, textStyle1]}>
          {searchTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={filterOnPress}>
        <IconSvgFilterButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'center',
    alignSelf: 'stretch',
    marginRight: 20,
    marginTop: 30,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  searchButtonStyle: {
    marginLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 266,
    height: 54,
    borderRadius: 15,
    borderWidth: 15,
    borderColor: colors.SHADOW,
    backgroundColor: colors.SHADOW,
  },
  searchTextStyle: {
    color: colors.GRAYTEXT,
    paddingTop: 3,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
