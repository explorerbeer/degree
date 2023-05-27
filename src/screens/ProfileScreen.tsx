import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import { AvatarIcon } from '../assets/icons/general/AvatarIcon';
import { SaveNowButton } from '../components/profile/buttons/SaveNowButton';
import { EditPrText } from '../components/profile/texts/EditPrText';
import { NameText } from '../components/profile/texts/NameText';
import { EScreens } from '../navigation/screens';
import { colors } from '../colors/colors';
import { UsernameBlock } from '../components/profile/inputs/UsernameBlock';
import { MailBlock } from '../components/profile/inputs/MailBlock';
import { PasswordBlock } from '../components/profile/inputs/PasswordBlock';
import { ThemeContext } from '../ThemeContext';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';

export const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('Faint Claude');
  const [inputMail, setInputMail] = useState('');
  const [displayMail, setDisplayMail] = useState(
    'faint_claude@gmail.com'
  );

  const { darkMode } = useContext(ThemeContext);

  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const containerStyle = { backgroundColor: backColor };

  const handleInputUsernameChange = (text: string) => {
    setInputText(text);
  };

  const handleInputMailChange = (text: string) => {
    setInputMail(text);
  };

  const changeText = () => {
    if (inputText) {
      setDisplayText(inputText);
    }
    if (inputMail) {
      setDisplayMail(inputMail);
    }
  };

  const navigateToHomeScreen = () => {
    navigation.navigate(EScreens.HOME);
  };

  return (
    <KeyboardAvoidingView
      style={[styles.profileContainer, containerStyle]}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <RespondBlockButton
        resTitle={'Profile'}
        onPress={navigateToHomeScreen}
      />
      <View>
        <AvatarIcon />
        <NameText nameTitle={displayText} />
        <EditPrText editTitle={displayMail} />
        <UsernameBlock
          nameTitle={'User Name'}
          placeholder={'User Name'}
          onChangeText={handleInputUsernameChange}
          value={inputText}
        />
        <MailBlock
          nameTitle={'Your Email'}
          placeholder={'mail@example.com'}
          onChangeText={handleInputMailChange}
          value={inputMail}
        />
        <PasswordBlock
          nameTitle={'Password'}
          placeholder={'anypassword'}
        />
        <SaveNowButton title={'Save Now'} onPress={changeText} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
});
