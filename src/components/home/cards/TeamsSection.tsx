import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {teams} from '../../../mocks/teams';
import {Teams} from './Teams';

export const TeamsSection = () => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={teams}
        renderItem={({item}) => (
          <Teams
            teamTitle={item.teamTitle}
            city={item.city}
            profession={item.profession}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
