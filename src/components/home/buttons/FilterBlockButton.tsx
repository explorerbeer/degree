import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import IconSvgFilterButton from '../../../assets/icons/general/IconSvgFilterButton';
import {colors} from '../../../colors/colors';

interface IFilterBlockButton {
  searchTitle: string;
  onPress: () => void;
}

export const FilterBlockButton = ({
  searchTitle,
  onPress,
}: IFilterBlockButton) => {
  return (
    <View style={styles.filterButtonStyle}>
      <TextInput
        style={styles.searchTextStyle}
        placeholder={searchTitle}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity onPress={onPress}>
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
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  searchTextStyle: {
    alignItems: 'flex-start',
    width: '75%',
    marginLeft: 20,
    paddingLeft: 20,
    marginTop: 30,
    fontSize: 16,
    borderRadius: 15,
    borderWidth: 15,
    borderColor: colors.SHADOW,
    backgroundColor: colors.SHADOW,
    fontFamily: 'Poppins-Regular',
  },
});
