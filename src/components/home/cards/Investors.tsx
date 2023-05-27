import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApplyButton } from '../buttons/ApplyButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../../../navigation/screens';
import { LikeButton } from '../buttons/LikeButton';
import { colors } from '../../../colors/colors';

export interface IInvestorsProps {
  project: string;
  genre: string;
  platform: string;
  links: string;
  msgLink: string;
  descr: string;
}

export const Investors: React.FC<IInvestorsProps> = ({
  project,
  genre,
  platform,
  links,
  msgLink,
  descr,
}) => {
  const navigation = useNavigation<any>();
  const navigateToApplications = () => {
    navigation.navigate(EScreens.APPLY);
  };

  const logLike = () => {
    console.log('Liked');
  };

  return (
    <View style={styles.flatContainerStyle}>
      <View style={styles.viewBlockStyle}>
        <Text style={styles.profTextStyle}>{project}</Text>
        <LikeButton onPress={logLike} />
      </View>
      <Text style={styles.cityTextStyle}>{genre}</Text>
      <Text style={styles.teamTextStyle}>{platform}</Text>
      <ApplyButton
        onPress={navigateToApplications}
        title={'Respond'}
      />
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
    shadowOffset: { width: 5, height: 5 },
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
