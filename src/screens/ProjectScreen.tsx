import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../colors/colors';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import _ from 'lodash';
import { ApplyButton } from '../components/home/buttons/ApplyButton';
import { investors } from '../mocks/investors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { ModalButton } from '../components/project/ModalButton';
import { AddButton } from '../components/home/buttons/AddButton';
import { ThemeContext } from '../ThemeContext';

type ItemProps = {
  project: string;
  genre: string;
  platform: string;
};

const Item = ({ project, genre, platform }: ItemProps) => {
  const navigation = useNavigation<any>();

  const logLike = () => {
    console.log('Liked');
  };

  const supportProject = () => {
    Alert.alert('Thanks for your support');
  };
  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowColor2 = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const textStyle2 = {
    color: textColor2,
    backgroundColor: shadowColor,
    borderColor: shadowColor2,
  };
  const textStyle3 = {
    color: textColor2,
  };
  const shadowStyle = { backgroundColor: shadowColor };
  return (
    <View>
      <View style={[styles.flatContainerStyle, shadowStyle]}>
        <View style={styles.viewBlockStyle}>
          <Text style={[styles.profTextStyle, textStyle3]}>
            {project}
          </Text>
        </View>
        <Text style={[styles.cityTextStyle, textStyle1]}>
          {genre}
        </Text>
        <Text style={[styles.teamTextStyle, textStyle1]}>
          {platform}
        </Text>
        <ApplyButton onPress={supportProject} title={'$ Support'} />
      </View>
    </View>
  );
};

export const ProjectScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const navigateToCreateProject = () => {
    navigation.navigate(EScreens.CREATE_PROJECT);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<ItemProps[]>([]);
  const [fullData, setFullData] = useState<ItemProps[]>([]);

  useEffect(() => {
    setFullData(investors);
    setData(investors);
  }, []);

  const handleSearch = (searchResult: string) => {
    setSearchQuery(searchResult);
    const formattedQuery = searchResult.toLowerCase();
    const filteredData = _.filter(fullData, (item: ItemProps) => {
      return (
        item.project.toLowerCase().includes(formattedQuery) ||
        item.genre.toLowerCase().includes(formattedQuery) ||
        item.platform.toLowerCase().includes(formattedQuery)
      );
    });
    setData(filteredData);
  };

  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<
    number | null
  >(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const snapPoints = ['85%'];

  const handleSnapPress = useCallback((index: number) => {
    setSelectedItemIndex(index);
    setSelectedProject(investors[index]);
    setIsOpen(true);
  }, []);

  const supportProject = () => {
    Alert.alert('Thanks for your support');
  };

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

  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = { backgroundColor: backColor };
  const textColor1 = darkMode ? colors.WHITETEXT : colors.GRAYTEXT;
  const textStyle1 = { color: textColor1 };
  const textColor2 = darkMode ? colors.WHITETEXT : colors.BLACKTEXT;
  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const shadowColor2 = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const textStyle2 = {
    color: textColor2,
    backgroundColor: shadowColor,
    borderColor: shadowColor2,
  };
  const textStyle3 = {
    color: textColor2,
  };
  const shadowStyle = { backgroundColor: shadowColor };

  return (
    <View style={[styles.container, backStyle]}>
      <RespondBlockButton
        resTitle={'Projects'}
        onPress={navigateToHome}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 10,
        }}
      >
        <TextInput
          placeholder={'Search here...'}
          placeholderTextColor={
            darkMode ? colors.WHITETEXT : colors.GRAYTEXT
          }
          autoCapitalize={'none'}
          autoCorrect={false}
          style={[styles.inputStyle, textStyle2]}
          clearButtonMode="always"
          value={searchQuery}
          onChangeText={(searchResult) => handleSearch(searchResult)}
        />
        <View style={{ paddingBottom: 20, paddingRight: 20 }}>
          <AddButton onPress={navigateToCreateProject} />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => handleSnapPress(index)}
          >
            <Item
              project={item.project}
              genre={item.genre}
              platform={item.platform}
            />
          </TouchableWithoutFeedback>
        )}
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
          <View style={styles.projectBlockStyle}>
            <Text style={[styles.projectTextStyle, textStyle3]}>
              {selectedProject ? selectedProject.project : ''}
            </Text>
          </View>
          <View style={styles.genrePlatformBlockStyle}>
            <Text style={[styles.genrePlatformTextStyle, textStyle1]}>
              {selectedProject ? selectedProject.genre : ''}
            </Text>
            <Text style={[styles.genrePlatformTextStyle, textStyle1]}>
              {selectedProject ? selectedProject.platform : ''}
            </Text>
          </View>
          <Text style={[styles.linkTextStyle, textStyle3]}>
            Project Link
          </Text>
          <View style={[styles.linkFieldStyle, shadowStyle]}>
            <Text style={[styles.linkTelegramStyle, textStyle1]}>
              {selectedProject ? selectedProject.links : ''}
            </Text>
          </View>
          <Text style={[styles.linkTextStyle, textStyle3]}>
            Communication Link
          </Text>
          <View style={[styles.linkFieldStyle, shadowStyle]}>
            <Text style={[styles.linkTelegramStyle, textStyle1]}>
              {selectedProject ? selectedProject.msgLink : ''}
            </Text>
          </View>
          <Text style={[styles.linkTextStyle, textStyle3]}>
            Project Description
          </Text>
          <View style={[styles.descrBlockStyle, shadowStyle]}>
            <Text style={[styles.descrStyle, textStyle1]}>
              {selectedProject ? selectedProject.descr : ''}
            </Text>
          </View>
          <View>
            <ModalButton
              title={'$ Support Project'}
              onPress={supportProject}
            />
          </View>
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
  inputStyle: {
    width: 285,
    height: 44,
    fontSize: 16,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
    borderWidth: 10,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    marginHorizontal: 20,
    marginTop: 25,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  flatContainerStyle: {
    marginVertical: 10,
    backgroundColor: colors.SHADOW,
    marginHorizontal: 20,
    borderRadius: 16,
    elevation: 10,
    height: 140,
    width: 350,
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
    paddingTop: 10,
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
  bottomViewStyle: {
    flex: 1,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: colors.BACK,
  },
  projectBlockStyle: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectTextStyle: {
    color: colors.BLACKTEXT,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  genrePlatformBlockStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingTop: 15,
  },
  genrePlatformTextStyle: {
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
  descrStyle: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-regular',
    color: colors.GRAYTEXT,
    textAlign: 'justify',
  },
});
