import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../colors/colors';
import {AvatarIcon} from '../../assets/icons/general/AvatarIcon';
import {useNavigation} from '@react-navigation/native';
import {EScreens} from '../../navigation/screens';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconLogOutDrawer from '../../assets/icons/drawertab/IconLogoutDrawer';

export const CustomDrawer = (props: any) => {
  const navigation = useNavigation<any>();

  const navigateToLogin = () => {
    navigation.navigate(EScreens.LOGIN);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerScrollViewStyle}>
        <View style={styles.avatarStyle}>
          <AvatarIcon />
          <Text style={styles.nameStyle}>Some People</Text>
          <Text style={styles.mailStyle}>mail@example.com</Text>
        </View>
        <View style={styles.itemListStyle}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.signOutStyle}>
        <TouchableOpacity
          style={styles.logoutIconStyle}
          onPress={navigateToLogin}>
          <IconLogOutDrawer />
          <Text style={styles.signOutTextStyle}>Logout</Text>
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
    fontSize: 30,
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
