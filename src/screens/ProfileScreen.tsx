import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {AvatarIcon} from '../assets/icons/general/AvatarIcon';
import {ProfileBlockButton} from '../components/profile/buttons/ProfileBlockButton';
import {SaveNowButton} from '../components/profile/buttons/SaveNowButton';
import {EditPrText} from '../components/profile/texts/EditPrText';
import {NameText} from '../components/profile/texts/NameText';
import {EScreens} from '../navigation/screens';
import {colors} from '../colors/colors';
import {UsernameBlock} from '../components/profile/inputs/UsernameBlock';
import {MailBlock} from '../components/profile/inputs/MailBlock';
import {PasswordBlock} from '../components/profile/inputs/PasswordBlock';

export const ProfileScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHomeScreen = () => {
    navigation.navigate(EScreens.HOME);
  };
  return (
    <KeyboardAvoidingView
      style={styles.profileContainer}
      behavior="padding"
      enabled={Platform.OS === 'ios'}>
      <ScrollView>
        <ProfileBlockButton
          prTitle={'Profile'}
          onPress={navigateToHomeScreen}
        />
        <AvatarIcon />
        <NameText nameTitle={'Some People'} />
        <EditPrText editTitle={'Edit profile'} />
        <UsernameBlock nameTitle={'User Name'} placeholder={'Some People'} />
        <MailBlock nameTitle={'Your Email'} placeholder={'mail@example.com'} />
        <PasswordBlock nameTitle={'Password'} placeholder={'anypassword'} />
        <SaveNowButton title={'SAVE NOW'} onPress={() => {}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
});
