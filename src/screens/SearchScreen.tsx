import React, { useCallback, useEffect, useState } from 'react';
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
  return (
    <View>
      <View style={styles.flatContainerStyle}>
        <View style={styles.viewBlockStyle}>
          <Text style={styles.profTextStyle}>{profession}</Text>
          <LikeButton onPress={logLike} />
        </View>
        <Text style={styles.cityTextStyle}>{city}</Text>
        <Text style={styles.teamTextStyle}>{teamTitle}</Text>
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

  return (
    <View style={styles.container}>
      <RespondBlockButton
        resTitle={'Search'}
        onPress={navigateToHome}
      />
      <TextInput
        placeholder={'Search here...'}
        placeholderTextColor={colors.GRAYTEXT}
        autoCapitalize={'none'}
        autoCorrect={false}
        style={styles.inputStyle}
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
    shadowOpacity: 0.1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
  },
  flatContainerStyle: {
    marginTop: 30,
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
