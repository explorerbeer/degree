import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconSvgDrawer from '../../../assets/icons/home/IconSvgDrawer';

interface IDrawerButton {
  onPressToDrawer: () => void;
}

export const DrawerButton = ({onPressToDrawer}: IDrawerButton) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onPressToDrawer} style={styles.btnStyle}>
          <IconSvgDrawer />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 3,
  },
});
