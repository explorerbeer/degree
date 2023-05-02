import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconProfileMenuButton from '../../../assets/icons/general/IconProfileMenuButton';

interface IProfileButton {
  onPress: () => void;
}

export const ProfileButton = ({onPress}: IProfileButton) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <IconProfileMenuButton />
      </TouchableOpacity>
    </View>
  );
};
