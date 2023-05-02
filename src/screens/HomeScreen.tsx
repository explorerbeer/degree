import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FilterBlockButton} from '../components/home/buttons/FilterBlockButton';
import {ProfileButton} from '../components/home/buttons/ProfileButton';
import {ShowAllBlockButton} from '../components/home/buttons/ShowAllBlockButton';
import {TeamsSection} from '../components/home/cards/TeamsSection';
import {EScreens} from '../navigation/screens';
import {DrawerButton} from '../components/home/buttons/DrawerButton';
import {SpecsSection} from '../components/home/cards/SpecsSection';
import {colors} from '../colors/colors';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const navigateToProfile = () => {
    navigation.navigate(EScreens.PROFILE);
  };

  const navigateToApplications = () => {
    navigation.navigate(EScreens.APPLICATIONS);
  };

  const navigateToDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuButtonStyle}>
        <DrawerButton onPressToDrawer={navigateToDrawer} />
        <ProfileButton onPress={navigateToProfile} />
      </View>

      <FilterBlockButton
        searchTitle={'Search here...'}
        onPress={navigateToProfile}
      />
      <ShowAllBlockButton
        popularTitle={'Teams'}
        showTitle={'Show All'}
        onPress={navigateToApplications}
      />
      <TeamsSection />
      <ShowAllBlockButton
        popularTitle={'Specialists'}
        showTitle={'Show All'}
        onPress={navigateToApplications}
      />
      <SpecsSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
  menuButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 60,
  },
});
