import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {teams} from '../../../mocks/teams';
import {Response} from './Response';

export const ResponseSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={teams}
        renderItem={({item}) => (
          <Response
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
