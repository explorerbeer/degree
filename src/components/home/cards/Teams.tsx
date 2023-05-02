import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ApplyButton} from '../buttons/ApplyButton';
import {useNavigation} from '@react-navigation/native';
import {EScreens} from '../../../navigation/screens';
import {LikeButton} from '../buttons/LikeButton';
import {colors} from '../../../colors/colors';

export interface ITeamsProps {
  teamTitle: string;
  profession: string;
  city: string;
}

export const Teams: React.FC<ITeamsProps> = ({teamTitle, profession, city}) => {
  const navigation = useNavigation<any>();
  const navigateToApplications = () => {
    navigation.navigate(EScreens.HOME);
  };
  const logLike = () => {
    console.log('Liked');
  };
  return (
    <View style={styles.flatContainerStyle}>
      <View style={styles.viewBlockStyle}>
        <Text style={styles.profTextStyle}>{profession}</Text>
        <LikeButton onPress={logLike} />
      </View>
      <Text style={styles.cityTextStyle}>{city}</Text>
      <Text style={styles.teamTextStyle}>{teamTitle}</Text>
      <ApplyButton onPress={navigateToApplications} title={'Respond'} />
    </View>
  );
};

const styles = StyleSheet.create({
  flatContainerStyle: {
    backgroundColor: colors.SHADOW,
    marginHorizontal: 10,
    borderRadius: 16,
    elevation: 10,
    height: 150,
    width: 225,
    shadowOpacity: 0.1,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
  },
  viewBlockStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profTextStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  cityTextStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    color: colors.GRAYTEXT,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  teamTextStyle: {
    paddingTop: 2,
    paddingLeft: 15,
    color: colors.GRAYTEXT,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
