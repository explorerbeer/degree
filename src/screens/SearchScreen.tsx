import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../colors/colors';
import { RespondBlockButton } from '../components/respond/buttons/RespondBlockButton';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../navigation/screens';
import { teams } from '../mocks/teams';
import _ from 'lodash';
import { LikeButton } from '../components/home/buttons/LikeButton';
import { ApplyButton } from '../components/home/buttons/ApplyButton';
import { ThemeContext } from '../ThemeContext';

type ItemProps = {
  teamTitle: string;
  profession: string;
  city: string;
};

const Item = ({ teamTitle, profession, city }: ItemProps) => {
  const navigation = useNavigation<any>();

  const navigateToApply = () => {
    navigation.navigate(EScreens.APPLY);
  };

  const logLike = () => {
    console.log('Liked');
  };

  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;
  const backStyle = {
    backgroundColor: backColor,
  };
  const textColorSpec = darkMode
    ? colors.WHITETEXT
    : colors.BLACKTEXT;
  const textStyleSpec = {
    color: textColorSpec,
  };
  const textColorCity = darkMode
    ? colors.OPACITYBUTTON
    : colors.GRAYTEXT;
  const textStyleCity = {
    color: textColorCity,
  };

  return (
    <View>
      <View style={[styles.flatContainerStyle, backStyle]}>
        <View style={styles.viewBlockStyle}>
          <Text style={[styles.profTextStyle, textStyleSpec]}>
            {profession}
          </Text>
          <LikeButton onPress={logLike} />
        </View>
        <Text style={[styles.cityTextStyle, textStyleCity]}>
          {city}
        </Text>
        <Text style={[styles.teamTextStyle, textStyleCity]}>
          {teamTitle}
        </Text>
        <ApplyButton onPress={navigateToApply} title={'Respond'} />
      </View>
    </View>
  );
};

export const SearchScreen = () => {
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate(EScreens.HOME);
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<ItemProps[]>([]);
  const [fullData, setFullData] = useState<ItemProps[]>([]);

  useEffect(() => {
    setFullData(teams);
    setData(teams);
  }, []);

  const handleSearch = (searchResult: string) => {
    setSearchQuery(searchResult);
    const formattedQuery = searchResult.toLowerCase();
    const filteredData = _.filter(fullData, (item: ItemProps) => {
      return (
        item.teamTitle.toLowerCase().includes(formattedQuery) ||
        item.profession.toLowerCase().includes(formattedQuery) ||
        item.city.toLowerCase().includes(formattedQuery)
      );
    });
    setData(filteredData);
  };

  const { darkMode } = useContext(ThemeContext);
  const backColor = darkMode ? colors.DARKBACK : colors.BACK;
  const backStyle = {
    backgroundColor: backColor,
  };
  const textColorSpec = darkMode
    ? colors.WHITETEXT
    : colors.BLACKTEXT;
  const textStyleSpec = {
    color: textColorSpec,
  };
  const textColorCity = darkMode
    ? colors.OPACITYBUTTON
    : colors.GRAYTEXT;
  const textStyleCity = {
    color: textColorCity,
  };

  const shadowColor = darkMode ? colors.DARKSHADOW : colors.SHADOW;

  const inputStyle = {
    color: textColorSpec,
    backgroundColor: shadowColor,
    borderColor: shadowColor,
  };

  return (
    <View style={[styles.container, backStyle]}>
      <RespondBlockButton
        resTitle={'Search'}
        onPress={navigateToHome}
      />
      <TextInput
        placeholder={'Search here...'}
        placeholderTextColor={
          darkMode ? colors.OPACITYBUTTON : colors.GRAYTEXT
        }
        autoCapitalize={'none'}
        autoCorrect={false}
        style={[styles.inputStyle, inputStyle]}
        clearButtonMode="always"
        value={searchQuery}
        onChangeText={(searchResult) => handleSearch(searchResult)}
      ></TextInput>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            teamTitle={item.teamTitle}
            profession={item.profession}
            city={item.city}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACK,
  },
  inputStyle: {
    fontSize: 16,
    color: colors.BLACKTEXT,
    fontFamily: 'Poppins-Regular',
    borderRadius: 15,
    borderWidth: 15,
    backgroundColor: colors.SHADOW,
    borderColor: colors.SHADOW,
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 25,
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  flatContainerStyle: {
    marginBottom: 15,
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
});
