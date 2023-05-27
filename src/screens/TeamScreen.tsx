import React, {
  useContext,
  useRef,
  useCallback,
  useState,
} from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { UserRespondsText } from '../components/respond/texts/UserRespondsText';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import { AllTeamsSection } from '../components/home/cards/AllTeamsSection';
import { colors } from '../colors/colors';
import { ThemeContext } from '../ThemeContext';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { teams } from '../mocks/teams';
import { ModalButton } from '../components/home/modal/ModalButton';

export const TeamScreen = () => {
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
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

  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const navigateToCreate = () => {
    navigation.navigate(EScreens.CREATE);
  };

  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<
    number | null
  >(null);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  const snapPoints = ['86.5%'];

  const handleSnapPress = useCallback((index: number) => {
    setSelectedItemIndex(index);
    setSelectedTeam(teams[index]);
    setIsOpen(true);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={isOpen ? 0.7 : 0}
      />
    ),
    [isOpen]
  );

  const handleSheetChange = useCallback((index: number) => {
    if (index === 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <ScrollView style={[styles.container, backStyle]}>
      <RespondBlockButton
        resTitle={'All Teams'}
        onPress={navigateToHome}
      />
      <UserRespondsText uTitle={'All Team Offers'} />
      <AllTeamsSection
        bottomSheetOnPress={handleSnapPress}
        selectedTeam={selectedTeam}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onClose={() => {
          setIsOpen(false);
          setSelectedItemIndex(null);
        }}
        onChange={handleSheetChange}
        index={isOpen ? 0 : -1}
      >
        <BottomSheetScrollView
          style={[styles.bottomViewStyle, backStyle]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.professionBlockStyle}>
            <Text style={[styles.professionTextStyle, textStyle3]}>
              {selectedTeam ? selectedTeam.profession : ''}
            </Text>
          </View>
          <View style={styles.teamCityBlockStyle}>
            <Text style={[styles.teamCityTextStyle, textStyle1]}>
              {selectedTeam ? selectedTeam.teamTitle : ''}
            </Text>
            <Text style={[styles.teamCityTextStyle, textStyle1]}>
              {selectedTeam ? selectedTeam.city : ''}
            </Text>
          </View>
          <Text style={[styles.descrTextStyle, textStyle3]}>
            Description:
          </Text>
          <View style={[styles.descrBlockStyle, textStyle2]}>
            <Text style={[styles.descrStyle, textStyle1]}>
              {selectedTeam ? selectedTeam.descr : ''}
            </Text>
          </View>
          <Text style={[styles.linkTextStyle, textStyle3]}>
            Links:
          </Text>
          <View style={[styles.linkFieldStyle, textStyle2]}>
            <Text style={[styles.linkTelegramStyle, textStyle1]}>
              {selectedTeam ? selectedTeam.links : ''}
            </Text>
            <View>
              <ModalButton
                title={'Respond'}
                onPress={navigateToCreate}
              />
            </View>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
  bottomSheetStyle: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  bottomViewStyle: {
    flex: 1,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: colors.BACK,
  },
  professionBlockStyle: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  professionTextStyle: {
    color: colors.BLACKTEXT,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  teamCityBlockStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingTop: 15,
  },
  teamCityTextStyle: {
    color: colors.GRAYTEXT,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  descrBlockStyle: {
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 16,
    borderColor: colors.SHADOW,
    backgroundColor: colors.SHADOW,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  descrTextStyle: {
    fontSize: 20,
    fontFamily: 'Poppins-Semibold',
    color: colors.BLACKTEXT,
    paddingTop: 20,
    paddingLeft: 20,
  },
  descrStyle: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-regular',
    color: colors.GRAYTEXT,
    textAlign: 'justify',
  },
  linkTextStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Semibold',
    color: colors.BLACKTEXT,
  },
  linkFieldStyle: {
    marginHorizontal: 20,
    marginTop: 20,
    width: 350,
    height: 52,
    borderRadius: 16,
    borderColor: colors.SHADOW,
    backgroundColor: colors.SHADOW,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  linkTelegramStyle: {
    fontSize: 16,
    paddingVertical: 13,
    paddingHorizontal: 15,
    fontFamily: 'Poppins-regular',
    color: colors.GRAYTEXT,
    textAlign: 'justify',
  },
});
