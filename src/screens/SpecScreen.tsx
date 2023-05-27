import { useNavigation } from '@react-navigation/native';
import React, {
  useCallback,
  useRef,
  useState,
  useContext,
} from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { EScreens } from '../navigation/screens';
import { AllSpecsSection } from '../components/home/cards/AllSpecsSection';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { UserRespondsText } from '../components/respond/texts/UserRespondsText';
import { colors } from '../colors/colors';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { specs } from '../mocks/specs';
import { ApplyButton } from '../components/filter/ApplyButton';
import { ThemeContext } from '../ThemeContext';

export const SpecScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<
    number | null
  >(null);
  const [selectedSpec, setSelectedSpec] = useState<any>(null);

  const snapPoints = ['85%'];

  const handleSnapSpecPress = useCallback((index: number) => {
    setSelectedItemIndex(index);
    setSelectedSpec(specs[index]);
    setIsOpen(true);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.7}
      />
    ),
    []
  );

  const navigateToSpec = () => {
    navigation.goBack();
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

  const makeOffer = () => {
    Alert.alert('Sent successfully');
  };

  return (
    <View style={[styles.container, backStyle]}>
      <RespondBlockButton
        resTitle={'All Specs'}
        onPress={navigateToHome}
      />
      <UserRespondsText uTitle={'All Spec Offers'} />
      <AllSpecsSection
        bottomSheetSpecsOnPress={handleSnapSpecPress}
        selectedSpec={selectedSpec}
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
        index={isOpen ? 0 : -1}
      >
        <BottomSheetScrollView
          style={[styles.bottomViewStyle, backStyle]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.professionBlockStyle}>
            <Text style={[styles.professionTextStyle, textStyle3]}>
              {selectedSpec ? selectedSpec.profession : ''}
            </Text>
          </View>
          <View style={styles.cityNameBlockStyle}>
            <Text style={[styles.cityNameTextStyle, textStyle1]}>
              {selectedSpec ? selectedSpec.city : ''}
            </Text>
            <Text style={[styles.cityNameTextStyle, textStyle1]}>
              {selectedSpec ? selectedSpec.nickName : ''}
            </Text>
          </View>
          <Text style={[styles.linkTextStyle, textStyle3]}>
            Communication
          </Text>
          <View style={[styles.linkFieldStyle, textStyle2]}>
            <Text style={[styles.linkTelegramStyle, textStyle1]}>
              {selectedSpec ? selectedSpec.specLink : ''}
            </Text>
          </View>
          <Text style={[styles.linkTextStyle, textStyle3]}>
            About Me
          </Text>
          <View style={[styles.descrBlockStyle, textStyle2]}>
            <Text style={[styles.descrStyle, textStyle1]}>
              {selectedSpec ? selectedSpec.descr : ''}
            </Text>
          </View>
          <ApplyButton title={'Make Offer'} onPress={makeOffer} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
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
  cityNameBlockStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingTop: 15,
  },
  cityNameTextStyle: {
    color: colors.GRAYTEXT,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
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
  descrStyle: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-regular',
    color: colors.GRAYTEXT,
    textAlign: 'justify',
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
});
