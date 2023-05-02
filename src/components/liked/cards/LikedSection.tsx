import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {teams} from '../../../mocks/teams';
import {Liked} from './Liked';

export const LikedSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={teams}
        renderItem={({item}) => (
          <Liked
            teamTitle={item.teamTitle}
            city={item.city}
            specs={item.profession}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
