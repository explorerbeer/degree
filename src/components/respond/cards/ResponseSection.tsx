import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { fakeTeams } from '../../../mocks/fakeTeams';
import { Response } from './Response';

export const ResponseSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={fakeTeams}
        renderItem={({ item }) => (
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
