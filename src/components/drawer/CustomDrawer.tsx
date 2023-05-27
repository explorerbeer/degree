import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../colors/colors';
import { AvatarIcon } from '../../assets/icons/general/AvatarIcon';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../../navigation/screens';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconLogOutDrawer from '../../assets/icons/drawertab/IconLogoutDrawer';
import { ThemeContext } from '../../ThemeContext';
import IconLogoutDrawerDark from '../../assets/icons/drawertab/IconLogoutDrawerDark';

export const CustomDrawer = (props: any) => {
  const navigation = useNavigation<any>();
  const navigateToLogin = () => {
    navigation.navigate(EScreens.LOGIN);
  };

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
    <View style={[styles.container, shadowStyle]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={[
          styles.drawerScrollViewStyle,
          shadowStyle,
        ]}
      >
        <View style={styles.avatarStyle}>
          <AvatarIcon />
          <Text style={[styles.nameStyle, textStyle3]}>
            Matvei Podleshuk
          </Text>
          <Text style={[styles.mailStyle, textStyle1]}>
            podleshuk.bsuir@ya.ru
          </Text>
        </View>
        <View style={[styles.itemListStyle, shadowStyle]}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.signOutStyle}>
        <TouchableOpacity
          style={styles.logoutIconStyle}
          onPress={navigateToLogin}
        >
          {darkMode ? <IconLogoutDrawerDark /> : <IconLogOutDrawer />}
          <Text style={[styles.signOutTextStyle, textStyle1]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  drawerScrollViewStyle: {
    backgroundColor: colors.SHADOW,
  },
  avatarStyle: {
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  nameStyle: {
    paddingTop: 20,
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: colors.BLACKTEXT,
  },
  mailStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.GRAYTEXT,
  },
  itemListStyle: {
    paddingTop: 60,
    backgroundColor: colors.SHADOW,
  },
  signOutTextStyle: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: colors.GRAYTEXT,
    marginLeft: 10,
  },
  logoutIconStyle: {
    marginLeft: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  signOutStyle: {
    padding: 40,
    borderTopWidth: 1,
    borderTopColor: colors.BLACKTEXT,
  },
});
